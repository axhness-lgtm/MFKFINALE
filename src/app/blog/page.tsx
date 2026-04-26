"use client";

import { useEffect, useState } from 'react';
import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-[#0d0606] min-h-screen">
      <Header />
      
      <section className="pt-60 md:pt-72 pb-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 md:mb-32 space-y-6">
            <FadeIn>
              <span className="gold-text uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold" style={{ fontFamily: '"Spectral", serif' }}>The Library</span>
              <h1 className="text-5xl md:text-8xl text-white font-light mt-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Journal</h1>
              <p className="mt-8 text-white/50 max-w-xl mx-auto text-sm md:text-base leading-relaxed" style={{ fontFamily: '"Spectral", serif' }}>
                Chronicles of craftsmanship, sartorial elegance, and the enduring legacy of the Visakhapatnam standard.
              </p>
            </FadeIn>
          </div>

          {loading ? (
             <div className="min-h-[40vh] flex items-center justify-center">
                 <div className="w-8 h-8 rounded-full border border-accent/20 border-t-accent animate-spin" />
             </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
              {blogPosts.map((post, idx) => (
                <FadeIn key={idx} delay={idx * 150}>
                  <Link href={`/blog/${post.slug}`} className="group block h-full flex flex-col">
                    <div className="relative aspect-[4/5] overflow-hidden border border-white/5 bg-[#111] mb-8">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80 group-hover:opacity-100"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-[#0a0a09]" />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0606] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-1000" />
                    </div>
                    
                    <div className="flex-grow flex flex-col justify-start">
                      <div className="flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-widest font-bold mb-4">
                        <span className="text-accent">{post.category || 'Journal'}</span>
                        <span className="text-white/20">|</span>
                        <span className="text-white/40">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <h2 className="text-3xl md:text-4xl leading-tight text-white/90 group-hover:text-accent transition-colors duration-500 mb-6" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                        {post.title}
                      </h2>
                      <p className="text-white/50 text-sm md:text-base font-light leading-relaxed line-clamp-3 mb-8" style={{ fontFamily: '"Spectral", serif' }}>
                        {post.excerpt}
                      </p>
                      
                      <div className="mt-auto">
                        <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-white/40 group-hover:text-accent transition-colors pb-1 border-b border-transparent group-hover:border-accent">
                          Read Entry <span className="text-accent">→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}
          
          {!loading && blogPosts.length === 0 && (
             <div className="text-center py-24 text-white/40">
               <p style={{ fontFamily: '"Spectral", serif' }}>The journal is currently empty.</p>
             </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
