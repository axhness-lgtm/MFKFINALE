"use client";

import { FadeIn } from '@/components/animations/FadeIn';
import Link from 'next/link';
import Image from 'next/image';

const featuredPosts = [
  {
    title: "The Art of Bespoke: A Legacy Since 1940",
    excerpt: "Discover the heritage of MFKhan and our commitment to uncompromising craftsmanship.",
    slug: "art-of-bespoke",
    image: "/images/fabric-silk.jpg",
    date: "April 12, 2026"
  },
  {
    title: "Choosing the Perfect Wedding Sherwani",
    excerpt: "A guide to selecting the right fabric, cut, and embroidery for your special day.",
    slug: "perfect-wedding-sherwani",
    image: "/images/fabric-velvet.jpg",
    date: "April 10, 2026"
  },
  {
    title: "2026 Formal Trends: Power & Precision",
    excerpt: "The evolution of the business suit and how to project authority through tailoring.",
    slug: "formal-trends-2026",
    image: "/images/fabric-linen.jpg",
    date: "April 08, 2026"
  }
];

export function BlogPreview() {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="group">
              <Link href={`/blog/${post.slug}`} className="block space-y-6">
                <div className="relative aspect-[16/10] overflow-hidden border border-white/5">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{post.date}</span>
                  <h3 className="text-xl md:text-2xl font-serif text-[#E8E0D0] group-hover:text-white transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/50 text-sm font-light line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
