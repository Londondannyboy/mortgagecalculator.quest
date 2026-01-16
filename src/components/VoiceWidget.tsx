'use client';

import { useState, useCallback } from 'react';
import { VoiceProvider, useVoice } from '@humeai/voice-react';

interface VoiceWidgetProps {
  variant?: 'fixed' | 'inline';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Voice Button - Uses useVoice hook inside VoiceProvider
 */
function VoiceButton({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const { connect, disconnect, status, error } = useVoice();
  const [isPending, setIsPending] = useState(false);

  const isConnected = status.value === 'connected';
  const isConnecting = status.value === 'connecting';

  const sizes = {
    sm: { button: 'w-10 h-10', icon: 'w-5 h-5' },
    md: { button: 'w-12 h-12', icon: 'w-6 h-6' },
    lg: { button: 'w-16 h-16', icon: 'w-7 h-7' },
  };
  const sizeConfig = sizes[size];

  const handleToggle = useCallback(async () => {
    if (isConnected) {
      console.log('🔴 Disconnecting voice...');
      disconnect();
      return;
    }

    setIsPending(true);
    try {
      console.log('🎤 Fetching Hume token...');
      const res = await fetch('/api/hume-token');
      const data = await res.json();

      if (data.error) {
        console.error('🔴 Token error:', data.error);
        alert(`Voice error: ${data.error}`);
        return;
      }

      console.log('🎤 Got token, connecting...');
      const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

      if (!configId) {
        console.error('🔴 No HUME_CONFIG_ID');
        alert('Voice not configured - missing config ID');
        return;
      }

      await connect({
        auth: { type: 'accessToken', value: data.accessToken },
        configId: configId,
        sessionSettings: {
          type: 'session_settings',
          systemPrompt: `You are a UK mortgage calculator voice assistant.
Your role is to help homebuyers:
1. Calculate monthly mortgage payments
2. Calculate UK stamp duty land tax
3. Compare different mortgage scenarios
4. Explain mortgage concepts clearly

IMPORTANT RULES:
- Keep responses SHORT for voice - 2-3 sentences max
- Use British English and UK-specific terminology
- All amounts are in GBP (£)
- Speak numbers naturally (e.g., "three hundred thousand pounds")
- Be warm and conversational`,
        },
      });
      console.log('🟢 Voice connected!');
    } catch (e) {
      console.error('🔴 Voice connect error:', e);
      alert(`Failed to connect: ${e}`);
    } finally {
      setIsPending(false);
    }
  }, [connect, disconnect, isConnected]);

  return (
    <button
      onClick={handleToggle}
      disabled={isPending || isConnecting}
      className={`
        ${sizeConfig.button} rounded-full flex items-center justify-center
        transition-all shadow-lg
        ${isConnected
          ? 'bg-red-500 hover:bg-red-600 animate-pulse'
          : isPending || isConnecting
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
        }
      `}
      title={isConnected ? 'Stop voice chat' : error ? `Error: ${error.message}` : 'Start voice chat'}
    >
      {isPending || isConnecting ? (
        <LoadingIcon className={`${sizeConfig.icon} text-white animate-spin`} />
      ) : isConnected ? (
        <StopIcon className={`${sizeConfig.icon} text-white`} />
      ) : (
        <MicIcon className={`${sizeConfig.icon} text-white`} />
      )}
    </button>
  );
}

// Stable handlers to prevent VoiceProvider remounting
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleError = (err: any) => console.error('🔴 Hume Error:', err?.message || err);
const handleOpen = () => console.log('🟢 Hume WebSocket opened');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleClose = (e: any) => console.log('🟡 Hume closed:', e?.code, e?.reason);

/**
 * VoiceWidget - Main export with VoiceProvider wrapper
 */
export function VoiceWidget({ variant = 'fixed', size = 'lg' }: VoiceWidgetProps) {
  const wrapperClass = variant === 'fixed'
    ? 'fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2'
    : 'flex items-center gap-2';

  return (
    <div className={wrapperClass}>
      <VoiceProvider
        onError={handleError}
        onOpen={handleOpen}
        onClose={handleClose}
      >
        <VoiceButton size={size} />
      </VoiceProvider>
      {variant === 'fixed' && (
        <span className="text-xs text-gray-500">Voice</span>
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
