'use client';

import { SignedIn, SignedOut, RedirectToSignIn, AccountSettingsCards } from '@neondatabase/auth/react/ui';
import { authClient } from '@/lib/auth/client';
import Link from 'next/link';

export default function ProfilePage() {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  if (isPending) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Signed Out - Redirect to sign in */}
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>

        {/* Signed In State */}
        <SignedIn>
          {/* Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {user?.image ? (
                  <img
                    src={user.image}
                    alt={user.name || 'User'}
                    className="w-16 h-16 rounded-full"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
                    {(user?.name || user?.email || 'U').charAt(0).toUpperCase()}
                  </div>
                )}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {user?.name || 'User'}
                  </h1>
                  <p className="text-gray-600">{user?.email}</p>
                </div>
              </div>
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Back to Calculator
              </Link>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Account Settings</h2>
            <AccountSettingsCards />
          </div>

          {/* Saved Calculations (placeholder) */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Saved Calculations</h2>
            <p className="text-gray-500 text-center py-8">
              Your saved mortgage calculations will appear here.
            </p>
          </div>

          {/* Danger Zone */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-red-200">
            <h2 className="text-xl font-bold text-red-600 mb-4">Danger Zone</h2>
            <p className="text-gray-600 mb-4">
              Sign out of your account or delete your data.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => authClient.signOut()}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
