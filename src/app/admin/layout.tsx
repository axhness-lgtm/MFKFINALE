"use client";

import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import Link from "next/link";
import { Package, Plus, LogOut, Loader2 } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Only run on client
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

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-accent animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4" style={{ fontFamily: '"Times New Roman", serif' }}>
        <div className="max-w-md w-full bg-white/5 border border-white/10 p-8 rounded-none">
          <div className="text-center mb-8">
            <h1 className="text-2xl text-white uppercase tracking-widest mb-2">MFKhan Secure</h1>
            <p className="text-sm text-white/50 tracking-widest uppercase">Admin Authorization</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {error && <div className="text-red-400 text-xs text-center border border-red-500/20 bg-red-500/10 p-2">{error}</div>}
            
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-white/70 block mb-2">Admin Email</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black border border-white/20 p-3 text-white outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.1em] text-white/70 block mb-2">Password</label>
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
              className="w-full bg-accent text-black uppercase tracking-[0.2em] font-bold py-4 hover:bg-white transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row" style={{ fontFamily: '"Times New Roman", serif' }}>
      {/* Admin Sidebar */}
      <div className="w-full md:w-64 bg-white/5 border-r border-white/10 p-6 flex flex-col hidden md:flex">
        <div className="mb-12">
          <h2 className="text-xl text-white uppercase tracking-widest font-bold">MFKhan</h2>
          <p className="text-[10px] text-accent uppercase tracking-widest">Admin Dashboard</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 text-white/70 hover:text-accent hover:bg-white/5 p-3 transition-all uppercase tracking-widest text-xs">
            <Package className="w-4 h-4" /> All Products
          </Link>
          <Link href="/admin/add-product" className="flex items-center gap-3 text-white/70 hover:text-accent hover:bg-white/5 p-3 transition-all uppercase tracking-widest text-xs">
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </nav>
        
        <button 
          onClick={handleLogOut}
          className="flex items-center gap-3 text-white/40 hover:text-red-400 p-3 transition-all uppercase tracking-widest text-xs mt-auto"
        >
          <LogOut className="w-4 h-4" /> Sign Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-black p-6 md:p-10 min-h-screen overflow-y-auto pt-24 md:pt-10">
        {children}
      </div>
      
      {/* Mobile Top Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-black border-b border-white/10 z-50 flex items-center justify-between px-4">
        <div>
           <h2 className="text-sm text-white uppercase tracking-widest font-bold">MFKhan Admin</h2>
        </div>
        <div className="flex items-center gap-4">
           <Link href="/admin" className="text-white hover:text-accent p-2"><Package className="w-5 h-5" /></Link>
           <Link href="/admin/add-product" className="text-white hover:text-accent p-2"><Plus className="w-5 h-5" /></Link>
           <button onClick={handleLogOut} className="text-white/40 hover:text-red-400 p-2"><LogOut className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}
