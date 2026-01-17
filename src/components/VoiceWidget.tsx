'use client';

import { useState, useEffect, useCallback } from 'react';
import { VoiceProvider, useVoice } from '@humeai/voice-react';

const CONFIG_ID = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

// Debug helper
const debug = (area: string, message: string, data?: unknown) => {
  const timestamp = new Date().toLocaleTimeString();
  const prefix = `[Hume ${timestamp}]`;
  if (data !== undefined) {
    console.log(`${prefix} ${area}: ${message}`, data);
  } else {
    console.log(`${prefix} ${area}: ${message}`);
  }
};

interface UserContext {
  id?: string;
  name?: string;
  email?: string;
}

interface VoiceWidgetProps {
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'md' | 'lg';
  user?: UserContext;
}

/**
 * Inner Voice Button - Uses useVoice hook (must be inside VoiceProvider)
 * Pattern matches relocation.quest VoiceChatSyncInner
 */
function VoiceButtonInner({
  accessToken,
  size = 'md',
  user,
}: {
  accessToken: string;
  size?: 'sm' | 'md' | 'lg';
  user?: UserContext;
}) {
  const { connect, disconnect, status, sendUserInput } = useVoice();
  const [isPending, setIsPending] = useState(false);

  const isConnected = status.value === 'connected';

  // Debug status changes
  useEffect(() => {
    debug('Status', `Connection state: ${status.value}`, {
      isConnected,
      userName: user?.name || 'Guest',
      configId: CONFIG_ID,
    });
  }, [status.value, isConnected, user]);

  const sizes = {
    sm: { button: 'w-10 h-10', icon: 'w-5 h-5' },
    md: { button: 'w-12 h-12', icon: 'w-6 h-6' },
    lg: { button: 'w-16 h-16', icon: 'w-7 h-7' },
  };
  const sizeConfig = sizes[size];

  const handleToggle = useCallback(async () => {
    if (isConnected) {
      debug('Action', 'Disconnecting...');
      disconnect();
      return;
    }

    setIsPending(true);

    // Fetch user context from ZEP if user is logged in
    let zepContext = '';
    if (user?.id) {
      debug('Zep', `Fetching context for userId: ${user.id}`);
      try {
        const zepRes = await fetch(`/api/zep/user?userId=${user.id}`);
        const zepData = await zepRes.json();
        if (zepData.isReturningUser && zepData.facts?.length > 0) {
          const facts = zepData.facts.slice(0, 5).map((f: { fact?: string }) => f.fact).filter(Boolean).join('; ');
          zepContext = `\n\nUSER CONTEXT:\nThis is a returning user. What you know about them: ${facts}`;
          debug('Zep', `Got context: ${facts.substring(0, 100)}...`);
        } else {
          debug('Zep', 'No context found for user');
        }
      } catch (e) {
        debug('Zep', 'Failed to fetch context', e);
      }
    }

    // Build personalized system prompt
    const userName = user?.name || 'Guest';
    const greeting = user?.name
      ? `The user's name is ${user.name}. Greet them warmly by name.`
      : 'This is a guest user. Greet them warmly.';

    const systemPrompt = `You are a UK mortgage calculator voice assistant.
Your role is to help homebuyers:
1. Calculate monthly mortgage payments
2. Calculate UK stamp duty land tax
3. Compare different mortgage scenarios
4. Explain mortgage concepts clearly

${greeting}${zepContext}

IMPORTANT RULES:
- Keep responses SHORT for voice - 2-3 sentences max
- Use British English and UK-specific terminology
- All amounts are in GBP (£)
- Speak numbers naturally (e.g., "three hundred thousand pounds")
- Be warm and conversational`;

    // Session ID for tracking
    const sessionId = user?.id
      ? `mortgage_${user.id}`
      : `guest_${Date.now()}`;

    debug('Action', '================================');
    debug('Action', `Connecting as: ${userName}`);
    debug('Action', `User ID: ${user?.id || 'none'}`);
    debug('Action', `Session ID: ${sessionId}`);
    debug('Action', `Config ID: ${CONFIG_ID}`);
    debug('Action', '================================');

    try {
      // Connect with sessionSettings (matches relocation.quest pattern exactly)
      await connect({
        auth: { type: 'accessToken' as const, value: accessToken },
        configId: CONFIG_ID,
        sessionSettings: {
          type: 'session_settings' as const,
          systemPrompt,
          customSessionId: sessionId,
        },
      });

      debug('Action', 'Connected successfully!');

      // Auto-greet after connection - send a greeting trigger
      setTimeout(() => {
        debug('Action', 'Sending greeting trigger');
        sendUserInput('speak your greeting');
      }, 500);

    } catch (e) {
      debug('Error', 'Connection failed', e);
    }

    setIsPending(false);
  }, [connect, disconnect, isConnected, accessToken, user, sendUserInput]);

  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`
        ${sizeConfig.button} rounded-full flex items-center justify-center
        transition-all shadow-lg
        ${isConnected
          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
          : isPending
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }
      `}
      title={isConnected ? 'Stop voice chat' : 'Start voice chat'}
    >
      {isPending ? (
        <LoadingIcon className={`${sizeConfig.icon} text-white animate-spin`} />
      ) : isConnected ? (
        <StopIcon className={`${sizeConfig.icon} text-white`} />
      ) : (
        <MicIcon className={`${sizeConfig.icon} text-white`} />
      )}
    </button>
  );
}

const GUEST_SESSION_LIMIT = 2;
const SESSION_STORAGE_KEY = 'voice-sessions-count';

/**
 * VoiceWidget - Main export
 * Pattern matches relocation.quest VoiceChatProvider:
 * 1. Fetch token on mount
 * 2. Only render VoiceProvider once token is available
 * 3. Pass token as prop to inner component
 * 4. Limit guest users to 2 sessions
 */
export function VoiceWidget({ variant = 'fixed', size = 'lg', user }: VoiceWidgetProps) {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sessionCount, setSessionCount] = useState(0);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

  // Check session count for guests
  useEffect(() => {
    if (typeof window !== 'undefined' && !user?.id) {
      const count = parseInt(localStorage.getItem(SESSION_STORAGE_KEY) || '0', 10);
      setSessionCount(count);
    }
  }, [user]);

  // Fetch token on mount (NOT on click)
  useEffect(() => {
    debug('Init', 'Fetching Hume token...');
    fetch('/api/hume-token')
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          debug('Init', 'Token received successfully');
          setAccessToken(data.accessToken);
        } else {
          debug('Error', 'No token in response', data);
          setError(data.error || 'No token');
        }
      })
      .catch((err) => {
        debug('Error', 'Token fetch failed', err);
        setError(err.message);
      });
  }, []);

  // Track session start for guests
  const onSessionStart = useCallback(() => {
    if (!user?.id && typeof window !== 'undefined') {
      const newCount = sessionCount + 1;
      localStorage.setItem(SESSION_STORAGE_KEY, newCount.toString());
      setSessionCount(newCount);
    }
  }, [sessionCount, user]);

  const wrapperClass = variant === 'fixed'
    ? 'fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2'
    : 'flex items-center gap-2';

  // Show error state
  if (error) {
    return (
      <div className={wrapperClass}>
        <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center" title={error}>
          <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>
    );
  }

  // Show loading state while fetching token
  if (!accessToken) {
    return (
      <div className={wrapperClass}>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  // Check if guest has exceeded session limit
  const isGuest = !user?.id;
  const hasExceededLimit = isGuest && sessionCount >= GUEST_SESSION_LIMIT;

  // Show login prompt overlay
  if (showLoginPrompt || hasExceededLimit) {
    return (
      <div className={wrapperClass}>
        <div className="relative">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <MicIcon className="w-5 h-5 text-gray-400" />
          </div>
          {/* Login prompt tooltip */}
          <div className="absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 p-3 text-xs">
            <p className="text-gray-700 mb-2">
              {hasExceededLimit
                ? 'You\'ve used your free voice sessions. Sign in for unlimited access!'
                : 'Sign in for unlimited voice sessions'}
            </p>
            <a
              href="/auth/sign-in"
              className="block w-full text-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded font-medium"
            >
              Sign In
            </a>
            {!hasExceededLimit && (
              <button
                onClick={() => setShowLoginPrompt(false)}
                className="mt-1 block w-full text-center text-gray-500 hover:text-gray-700 text-xs"
              >
                Continue as guest ({GUEST_SESSION_LIMIT - sessionCount} left)
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Only render VoiceProvider once we have the token
  return (
    <div className={wrapperClass}>
      <VoiceProvider
        onError={(err) => debug('Error', 'VoiceProvider error:', err)}
        onOpen={() => {
          debug('Status', 'VoiceProvider opened');
          onSessionStart();
        }}
        onClose={(e) => debug('Status', 'VoiceProvider closed:', e)}
      >
        <VoiceButtonInner accessToken={accessToken} size={size} user={user} />
      </VoiceProvider>
      {variant === 'fixed' && (
        <span className="text-xs text-gray-500">Voice</span>
      )}
      {/* Show remaining sessions for guests */}
      {isGuest && variant === 'inline' && sessionCount > 0 && (
        <span className="text-xs text-amber-600">
          {GUEST_SESSION_LIMIT - sessionCount} left
        </span>
      )}
    </div>
  );
}

// Icons
function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  );
}

function StopIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
    </svg>
  );
}

function LoadingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );
}

export default VoiceWidget;
