"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { Github, LogOut, User, Sparkles } from "lucide-react";

export default function AuthComponent() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-white border-t-transparent"></div>
      </div>
    );
  }

  if (session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4">
              <User className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Welcome back!</h1>
            <p className="text-white/70">You're successfully signed in</p>
          </div>
          
          <div className="bg-white/5 rounded-xl p-6 mb-6 border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={session.user?.image || "/default-avatar.png"}
                alt="Profile"
                className="w-12 h-12 rounded-full border-2 border-white/20"
              />
              <div>
                <h2 className="font-semibold text-white text-lg">
                  {session.user?.name || "GitHub User"}
                </h2>
                <p className="text-white/60 text-sm">
                  {session.user?.email || "github@example.com"}
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-white/50 text-sm">
              <Github className="w-4 h-4" />
              <span>Connected via GitHub</span>
            </div>
          </div>

          <button
            onClick={() => signOut()}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome</h1>
          <p className="text-white/70">Sign in to get started</p>
        </div>
        
        <div className="space-y-4">
          <div className="text-center text-white/60 text-sm mb-6">
            Connect your GitHub account to continue
          </div>
          
          <button
            onClick={() => signIn("github")}
            className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg border border-white/10"
          >
            <Github className="w-5 h-5" />
            <span>Continue with GitHub</span>
          </button>
          
          <div className="text-center text-white/50 text-xs mt-4">
            By signing in, you agree to our terms of service
          </div>
        </div>
      </div>
      
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-5 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  );
}