"use client";

import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

export function BlogPreview() {
  const [featuredPosts, setFeaturedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        // Just take the latest 3
        setFeaturedPosts(data.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  return (
    <section className="py-12 md:py-24 px-6 md:px-12 bg-[#0a0a09]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="space-y-4">
            <span className="gold-text uppercase tracking-[0.4em] text-[10px] font-bold">The Journal</span>
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[#E8E0D0]">Sartorial Insights</h2>
          </div>
          <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-white/40 hover:text-accent transition-colors border-b border-white/10 pb-1">
            View All Posts
          </Link>
        </div>

        {loading ? (
          <div className="min-h-[20vh] flex items-center justify-center">
            <div className="w-6 h-6 rounded-full border border-accent/20 border-t-accent animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map((post, idx) => {
              const previewImg = post.images && post.images.length > 0 ? post.images[0] : (post.image || "/images/fabric-silk.jpg");
              return (
                <FadeIn key={idx} delay={idx * 150} className="group">
                  <Link href={`/blog/${post.slug}`} className="block space-y-6">
                    <div className="relative aspect-[16/10] overflow-hidden border border-white/5">
                      <Image
                        src={previewImg}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="space-y-3">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-bold">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                      <h3 className="text-xl md:text-2xl font-serif text-[#E8E0D0] group-hover:text-white transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-white/50 text-sm font-light line-clamp-2 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
