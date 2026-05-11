"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Share2, Copy } from 'lucide-react';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<any | null>(null);
  const [allBlogs, setAllBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setAllBlogs(data);
        const found = data.find((b: any) => b.slug === slug);
        setPost(found || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#0a0a09] min-h-screen relative">
        {/* Technical Grid Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDBWMG0wIDQwVjIwbTIwIDBIMG00MCAwSDIwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMikiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />
        <div className="min-h-[80vh] flex items-center justify-center relative z-10">
            <div className="w-8 h-8 rounded-full border border-accent/20 border-t-accent animate-spin" />
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-[#0a0a09] min-h-screen">
        <div className="min-h-[80vh] flex flex-col items-center justify-center space-y-6 pt-32">
            <h1 className="text-4xl text-white font-serif">Journal Entry Not Found</h1>
            <Link href="/blog" className="hero-btn-secondary">Return to Library</Link>
        </div>
      </div>
    );
  }

  // Get up to 2 images
  const images = post.images && post.images.length > 0 ? post.images : (post.image ? [post.image] : []);
  const readingTime = Math.ceil((post.content.length / 500)) || 5; // Rough estimate based on char length
  
  const relatedPosts = allBlogs.filter(b => b.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[#0a0a09] min-h-screen selection:bg-accent/30 selection:text-white relative">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDBWMG0wIDQwVjIwbTIwIDBIMG00MCAwSDIwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNCkiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')] pointer-events-none" style={{ backgroundSize: '100px 100px' }} />
      
      {/* Floating Crosshairs */}
      <div className="absolute top-40 left-[10%] text-white/10 font-mono text-xs">+</div>
      <div className="absolute top-40 right-[10%] text-white/10 font-mono text-xs">+</div>
      <div className="absolute top-[40%] left-[20%] text-white/10 font-mono text-xs">+</div>
      <div className="absolute bottom-[20%] right-[15%] text-white/10 font-mono text-xs">+</div>
      
      <article className="pt-24 md:pt-32 pb-32 px-6 md:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto">
          {/* Back Navigation */}
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-mono font-bold text-white/50 hover:text-accent transition-colors mb-12">
              <ArrowLeft className="w-4 h-4" /> Back to Journal
            </Link>
          </FadeIn>

          {/* Massive Header */}
          <FadeIn delay={100} className="mb-16 md:mb-24">
            <h1 className="text-5xl md:text-[80px] lg:text-[100px] text-[#E8E0D0] font-light leading-[1.1] tracking-tight max-w-[1200px]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              {post.title}
            </h1>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-16 lg:gap-32">
            {/* Left Sidebar - Technical Metadata */}
            <FadeIn delay={200} className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-8 border-b border-white/10 pb-4">/ METADATA</h3>
                
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 border-b border-white/10 border-dashed pb-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-accent">DATE:</span>
                    <span className="text-sm font-mono text-white/80">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric' }).replace(/\//g, '.')}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-accent">AUTHOR:</span>
                    <span className="text-xs font-mono text-[#E8E0D0] border border-white/10 px-2 py-1 w-fit">M.F. KHAN INTERNATIONAL</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6 border-b border-white/10 border-dashed pb-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-accent">READING TIME:</span>
                    <span className="text-sm font-mono text-white/80">{readingTime} MIN READ</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] uppercase font-mono tracking-widest text-accent">CATEGORIES:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-[10px] font-mono text-[#E8E0D0] border border-white/10 px-2 py-1 uppercase">{post.category || 'JOURNAL'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agents / Share Blocks */}
              <div className="space-y-6">
                 <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-6 border-b border-white/10 pb-4">/ ACTIONS</h3>
                 <div className="grid grid-cols-2 gap-3">
                   <button className="flex items-center justify-center gap-2 border border-accent/40 rounded-full px-4 py-2 hover:bg-accent/10 transition-colors">
                     <Copy className="w-3 h-3 text-accent" />
                     <span className="text-[10px] font-bold text-white font-mono">Copy Link</span>
                   </button>
                   <button className="flex items-center justify-center gap-2 border border-white/20 rounded-full px-4 py-2 hover:bg-white/5 transition-colors">
                     <Share2 className="w-3 h-3 text-white" />
                     <span className="text-[10px] font-bold text-white font-mono">Share</span>
                   </button>
                 </div>
              </div>
            </FadeIn>

            {/* Right Content */}
            <FadeIn delay={300} className="relative">
              <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-8 border-b border-white/10 pb-4">/ ARTICLE</h3>
              
              {/* Images Block (Integrated into flow like technical diagrams) */}
              {images.length > 0 && (
                <div className={`grid gap-4 md:gap-8 mb-16 ${images.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {images.slice(0, 2).map((imgUrl: string, idx: number) => (
                    <div key={idx} className="relative border border-white/10 bg-[#0d0606] p-2">
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a09] px-2 text-[8px] font-mono text-white/40 uppercase tracking-widest">
                        [ FIG 0{idx + 1} ]
                      </div>
                      <div className="relative aspect-[16/10] w-full bg-[#111]">
                        <Image
                          src={imgUrl}
                          alt={`${post.title} - Figure ${idx + 1}`}
                          fill
                          className="object-cover"
                          priority={idx === 0}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {post.excerpt && (
                <p className="text-xl md:text-2xl text-accent font-light leading-relaxed mb-12 border-l border-accent pl-6" style={{ fontFamily: '"Spectral", serif' }}>
                  {post.excerpt}
                </p>
              )}

              {/* Main HTML Content */}
              <div 
                className="max-w-none text-[#E8E0D0] text-xl md:text-2xl font-light leading-loose 
                [&_p]:text-[#E8E0D0] [&_p]:text-xl md:[&_p]:text-2xl [&_p]:font-light [&_p]:leading-loose [&_p]:mb-8
                [&_h1]:font-serif [&_h1]:text-[#E8E0D0] [&_h1]:text-4xl [&_h1]:mb-6
                [&_h2]:font-serif [&_h2]:text-[#E8E0D0] [&_h2]:text-3xl [&_h2]:mb-6
                [&_h3]:font-serif [&_h3]:text-[#E8E0D0] [&_h3]:text-2xl [&_h3]:mb-4
                [&_a]:text-accent hover:[&_a]:text-white [&_a]:transition-colors 
                [&_strong]:text-white [&_strong]:font-normal
                [&_blockquote]:border-l-accent [&_blockquote]:bg-white/5 [&_blockquote]:p-6 [&_blockquote]:italic [&_blockquote]:mb-8"
                style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                dangerouslySetInnerHTML={{ __html: post.content }} 
              />

              {/* Related Articles Segment */}
              {relatedPosts.length > 0 && (
                <div className="mt-32 pt-16 border-t border-white/10">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] font-mono text-white/40 mb-12">/ RELATED ARTICLES</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {relatedPosts.map((relatedPost, idx) => {
                      const rImage = relatedPost.images && relatedPost.images.length > 0 ? relatedPost.images[0] : (relatedPost.image || '/images/fabric-silk.jpg');
                      return (
                        <Link href={`/blog/${relatedPost.slug}`} key={idx} className="group block space-y-4">
                          <div className="relative aspect-[16/10] overflow-hidden border border-white/5">
                             <Image
                               src={rImage}
                               alt={relatedPost.title}
                               fill
                               className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                             />
                          </div>
                          <div className="space-y-2">
                             <span className="text-[9px] uppercase font-mono tracking-widest text-accent block">
                                {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                             </span>
                             <h4 className="text-xl md:text-2xl font-serif text-[#E8E0D0] group-hover:text-white transition-colors leading-tight">
                                {relatedPost.title}
                             </h4>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
              
            </FadeIn>
          </div>
        </div>
      </article>
    </div>
  );
}
