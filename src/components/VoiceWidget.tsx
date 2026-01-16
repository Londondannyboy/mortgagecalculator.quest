'use client';

import { VoiceProvider, useVoice, VoiceReadyState } from '@humeai/voice-react';
import { useState, useEffect, useCallback } from 'react';

/**
 * Voice Controls - The actual button and UI
 */
function VoiceControls({ accessToken, configId }: { accessToken: string; configId: string }) {
  const {
    connect,
    disconnect,
    readyState,
    isMuted,
    mute,
    unmute,
    fft,
    micFft,
    isPlaying,
    error,
  } = useVoice();

  const isConnected = readyState === VoiceReadyState.OPEN;
  const isConnecting = readyState === VoiceReadyState.CONNECTING;

  // Calculate audio amplitude for visual feedback
  const getAmplitude = useCallback((fftValues: number[] | undefined): number => {
    if (!fftValues || fftValues.length === 0) return 0;
    const sum = fftValues.reduce((acc, val) => acc + Math.abs(val), 0);
    const avg = sum / fftValues.length;
    return Math.min(avg / 50, 1);
  }, []);

  const amplitude = getAmplitude(isConnected ? (isPlaying ? fft : micFft) : micFft);

  const handleToggle = async () => {
    if (isConnected) {
      await disconnect();
    } else {
      await connect({
        auth: { type: 'accessToken', value: accessToken },
        configId: configId,
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-2">
      {/* Error indicator */}
      {error && (
        <div className="bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-lg max-w-48 truncate">
          {error.message}
        </div>
      )}

      {/* Status indicator */}
      {isConnected && !error && (
        <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-full shadow-lg">
          {isMuted ? 'Muted' : isPlaying ? 'Speaking...' : 'Listening...'}
        </div>
      )}

      {/* Mute button (only when connected) */}
      {isConnected && (
        <button
          onClick={() => isMuted ? unmute() : mute()}
          className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center shadow-md"
          title={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? (
            <MicOffIcon className="w-5 h-5 text-red-500" />
          ) : (
            <MicIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          )}
        </button>
      )}

      {/* Main voice button */}
      <button
        onClick={handleToggle}
        disabled={isConnecting}
        className={`
          relative w-16 h-16 rounded-full shadow-xl transition-all duration-300
          flex items-center justify-center
          ${isConnected
            ? 'bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700'
            : 'bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
          }
          ${isConnecting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        title={isConnected ? 'Stop voice chat' : 'Start voice chat'}
      >
        {/* Audio amplitude ring */}
        {isConnected && (
          <div
            className="absolute inset-0 rounded-full border-4 border-white/50 transition-transform duration-100"
            style={{
              transform: `scale(${1 + amplitude * 0.3})`,
              opacity: 0.5 + amplitude * 0.5,
            }}
          />
        )}

        {/* Icon */}
        {isConnecting ? (
          <LoadingIcon className="w-7 h-7 text-white animate-spin" />
        ) : isConnected ? (
          <PhoneOffIcon className="w-7 h-7 text-white" />
        ) : (
          <PhoneIcon className="w-7 h-7 text-white" />
        )}
      </button>

      {/* Label */}
      <span className="text-xs text-gray-500 dark:text-gray-400">
        {isConnecting ? 'Connecting...' : isConnected ? 'End call' : 'Voice chat'}
      </span>
    </div>
  );
}

/**
 * VoiceWidget - Wrapper with VoiceProvider
 */
export function VoiceWidget() {
  const [accessToken, setAccessToken] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const configId = process.env.NEXT_PUBLIC_HUME_CONFIG_ID || '';

  useEffect(() => {
    async function fetchToken() {
      try {
        setIsLoading(true);
        const response = await fetch('/api/hume-token');
        const data = await response.json();

        if (data.error) {
          setError(data.error);
        } else {
          setAccessToken(data.accessToken);
        }
      } catch (err) {
        setError('Failed to initialize voice');
        console.error('Voice init error:', err);
      } finally {
        setIsLoading(false);
      }
    }

    if (configId) {
      fetchToken();
    } else {
      setIsLoading(false);
      setError('Voice not configured');
    }
  }, [configId]);

  if (isLoading) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
          <LoadingIcon className="w-6 h-6 text-gray-400 animate-spin" />
        </div>
      </div>
    );
  }

  if (error || !accessToken || !configId) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div
          className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center opacity-50 cursor-not-allowed"
          title={error || 'Voice not configured'}
        >
          <MicOffIcon className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    );
  }

  return (
    <VoiceProvider>
      <VoiceControls accessToken={accessToken} configId={configId} />
    </VoiceProvider>
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

function MicOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 19L5 5m14 0v1.5a6 6 0 01-.34 2M12 18.75a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 015.83-1.12" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function PhoneOffIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .39-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85-.18.18-.43.28-.7.28-.28 0-.53-.11-.71-.29L.29 13.08a.956.956 0 01-.29-.7c0-.28.11-.53.29-.71C3.34 8.78 7.46 7 12 7s8.66 1.78 11.71 4.67c.18.18.29.43.29.71 0 .28-.11.53-.29.71l-2.48 2.48c-.18.18-.43.29-.71.29-.27 0-.52-.1-.7-.28-.79-.73-1.68-1.36-2.66-1.85-.33-.16-.56-.5-.56-.9v-3.1C15.15 9.25 13.6 9 12 9z"/>
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
