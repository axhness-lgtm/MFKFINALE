"use client";

import { useEffect, useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, User, Calendar, MessageSquare, Tag, Lock } from 'lucide-react';

interface Inquiry {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
  timestamp: string;
}

export default function AdminPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetch('/api/inquiries')
        .then(res => res.json())
        .then(data => {
          setInquiries(data.reverse()); // Newest first
          setLoading(false);
        });
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '1940') { // Heritage Year
      setIsAuthenticated(true);
    } else {
      alert('Incorrect authorization code.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0a0a09] flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center p-6">
          <FadeIn className="max-w-md w-full">
            <div className="luxury-card p-12 text-center space-y-8 bg-black/40 backdrop-blur-2xl border border-white/10">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-8">
                <Lock className="text-accent w-8 h-8" />
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-serif text-[#E8E0D0]">Owner Access</h1>
                <p className="text-[#E8E0D0]/50 text-xs uppercase tracking-widest leading-relaxed">
                  Enter the Heritage Year to view global inquiries.
                </p>
              </div>
              <form onSubmit={handleLogin} className="space-y-6">
                <Input 
                  type="password" 
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="AUTHORIZATION CODE"
                  className="bg-white/5 border-white/10 text-white text-center h-14 rounded-none tracking-[0.5em] focus:border-accent"
                />
                <Button className="w-full hero-btn-secondary h-14 uppercase tracking-[0.2em] font-bold text-xs" style={{ border: '0.5px solid hsl(var(--accent))' }}>
                  Verify Identity
                </Button>
              </form>
            </div>
          </FadeIn>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a09] flex flex-col">
      <Header />
      <main className="flex-grow pt-40 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-12">
              <div className="space-y-4">
                <span className="gold-text uppercase tracking-[0.5em] text-[10px] font-bold">Inquiry Management</span>
                <h1 className="text-5xl md:text-7xl font-serif font-light text-white">Dashboard</h1>
              </div>
              <div className="text-right">
                <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium mb-2">Authenticated Session</p>
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-white font-serif text-lg">{inquiries.length} Private Lead{inquiries.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="luxury-card bg-black/40 backdrop-blur-3xl border border-white/5 overflow-hidden">
              <Table>
                <TableHeader className="bg-white/5">
                  <TableRow className="border-white/10 hover:bg-transparent">
                    <TableHead className="text-white/40 uppercase tracking-[0.2em] text-[10px] h-16 font-bold">Customer</TableHead>
                    <TableHead className="text-white/40 uppercase tracking-[0.2em] text-[10px] h-16 font-bold">Interest</TableHead>
                    <TableHead className="text-white/40 uppercase tracking-[0.2em] text-[10px] h-16 font-bold">Message</TableHead>
                    <TableHead className="text-white/40 uppercase tracking-[0.2em] text-[10px] h-16 font-bold">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-20 text-white/30 italic">Retrieving secure data...</TableCell>
                    </TableRow>
                  ) : inquiries.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center py-20 text-white/30 italic">No inquiries found in the records.</TableCell>
                    </TableRow>
                  ) : (
                    inquiries.map((inquiry) => (
                      <TableRow key={inquiry.id} className="border-white/5 hover:bg-white/[0.02] transition-colors group">
                        <TableCell className="py-8">
                          <div className="space-y-1">
                            <p className="text-white font-serif text-lg leading-none">{inquiry.firstName} {inquiry.lastName}</p>
                            <div className="flex items-center gap-2 text-white/40 text-xs font-light">
                              <Mail className="w-3 h-3 text-accent" />
                              {inquiry.email}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Tag className="w-3 h-3 text-accent" />
                            <span className="text-[#E8E0D0] text-sm font-medium tracking-wide">{inquiry.interest || 'Bespoke Inquiry'}</span>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-md">
                          <p className="text-white/60 text-sm leading-relaxed line-clamp-2 italic font-light group-hover:line-clamp-none transition-all">
                            "{inquiry.message}"
                          </p>
                        </TableCell>
                        <TableCell className="text-white/30 text-[10px] tracking-widest font-medium uppercase whitespace-nowrap">
                          {new Date(inquiry.timestamp).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
