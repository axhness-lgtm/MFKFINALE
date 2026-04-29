"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { LogOut, Loader2 } from "lucide-react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    } finally {
      setLoading(false);
    }
  };

  const handleLogOut = async () => {
    await signOut(auth);
  };

  /* ── Loading ── */
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  /* ── Login Wall ── */
  if (!user) {
    return (
      <div
        className="min-h-screen bg-black flex flex-col items-center justify-center gap-10 p-6"
        style={{ fontFamily: '"Times New Roman", serif' }}
      >
        {/* Spinning logo */}
        <div className="w-24 h-24 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-black">
          <video
            src="/images/logoloop.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        <div className="max-w-sm w-full bg-white/5 border border-white/10 p-8">
          <div className="text-center mb-8">
            <h1 className="text-xl text-white uppercase tracking-widest mb-1">MFKhan Secure</h1>
            <p className="text-[10px] text-white/40 tracking-widest uppercase">Admin Authorization</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="text-red-400 text-xs text-center border border-red-500/20 bg-red-500/10 p-2">
                {error}
              </div>
            )}
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-2">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-white/20 p-3 text-white outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-widest text-white/50 block mb-2">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-black border border-white/20 p-3 text-white outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-black uppercase tracking-[0.2em] font-bold py-3 hover:bg-white transition-colors text-sm"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  /* ── Authenticated Shell ── */
  return (
    <div
      className="min-h-screen bg-[#0a0a09] text-white flex flex-col"
      style={{ fontFamily: '"Times New Roman", serif' }}
    >
      {/* Admin Top Bar — logo centred, sign-out right */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-white/8 bg-black/60 backdrop-blur-sm">
        {/* Left spacer so logo stays centred */}
        <div className="w-24" />

        {/* Spinning Logo */}
        <div className="w-16 h-16 rounded-full overflow-hidden border border-white/15 shadow-xl bg-black flex-shrink-0">
          <video
            src="/images/logoloop.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-125"
          />
        </div>

        {/* Sign out */}
        <div className="w-24 flex justify-end">
          <button
            onClick={handleLogOut}
            title="Sign Out"
            className="flex items-center gap-2 text-white/30 hover:text-red-400 transition-colors text-[10px] uppercase tracking-widest"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Page content */}
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-8">
        {children}
      </div>
    </div>
  );
}
