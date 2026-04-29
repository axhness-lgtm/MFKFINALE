import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { Metadata, ResolvingMetadata } from 'next';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  let post: any = null;
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) post = snapshot.docs[0].data();
  } catch (e) {}

  if (!post) {
    return { title: 'Not Found | MFKhan International' };
  }

  return {
    title: `${post.title} | The MFKhan Journal`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post: any = null;
  let recentPosts: any[] = [];
  
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      post = snapshot.docs[0].data();
    }
    
    // Fetch recent posts for "Read More"
    const recentQ = query(collection(db, 'blogs'), limit(3));
    const recentSnapshot = await getDocs(recentQ);
    recentPosts = recentSnapshot.docs
      .map(doc => doc.data())
      .filter(p => p.slug !== slug)
      .slice(0, 2);
  } catch (error) {
    console.error("Failed to fetch blog content", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#0a0a09] min-h-screen">
      <Header />
      
      {/* Cinematic Hero */}
      <section className="relative h-[80vh] md:h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={post.image || '/images/hero-journal.jpg'}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-60 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-[#0a0a09]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <FadeIn>
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-[1px] bg-accent/40" />
              <span className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] text-accent font-bold font-serif">
                {post.category || 'The Journal'}
              </span>
              <span className="w-8 h-[1px] bg-accent/40" />
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl text-white font-light leading-[1.1] mb-8 font-serif italic">
              {post.title}
            </h1>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-mono">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} — By MFKhan Maison
            </p>
          </FadeIn>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-accent/50" />
        </div>
      </section>

      <article className="pt-24 pb-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          {/* Lead Text */}
          <FadeIn delay={200} className="mb-16">
            <p className="text-xl md:text-3xl text-[#E8E0D0] font-serif leading-relaxed italic border-l-2 border-accent/20 pl-8">
              {post.excerpt}
            </p>
          </FadeIn>

          {/* Main Body */}
          <FadeIn delay={400} className="prose prose-brand max-w-none">
            <div 
              className="editorial-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
          
          {/* Article Footer */}
          <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12">
             <div className="text-center md:text-left space-y-2">
                <span className="gold-text uppercase tracking-widest text-[10px] font-bold">Heritage & Quality</span>
                <p className="text-white text-2xl font-serif italic">The MF Khan International Experience</p>
             </div>
             <Link href="/blog" className="hero-btn-secondary px-12">
                Back to Journal
             </Link>
          </div>
        </div>
      </article>

      {/* More to Read */}
      {recentPosts.length > 0 && (
        <section className="py-24 bg-[#0d0606] border-t border-white/5 px-6 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-4">
                <span className="gold-text uppercase tracking-[0.4em] text-[10px] font-bold">Continue Reading</span>
                <h2 className="text-3xl md:text-5xl font-serif font-light text-[#E8E0D0]">Sartorial Insights</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {recentPosts.map((rp, idx) => (
                <FadeIn key={idx} delay={idx * 150} className="group">
                  <Link href={`/blog/${rp.slug}`} className="flex flex-col md:flex-row gap-8">
                    <div className="relative aspect-[4/3] md:w-1/2 overflow-hidden border border-white/5">
                      <Image
                        src={rp.image}
                        alt={rp.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                    </div>
                    <div className="md:w-1/2 space-y-4 py-4">
                      <span className="text-[10px] uppercase tracking-widest text-accent font-bold">{rp.category}</span>
                      <h3 className="text-2xl font-serif text-[#E8E0D0] leading-tight group-hover:text-white transition-colors">{rp.title}</h3>
                      <p className="text-white/40 text-sm line-clamp-2 leading-relaxed font-light">{rp.excerpt}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      
      <style dangerouslySetInnerHTML={{__html: `
        .editorial-content {
          font-family: "Spectral", serif;
          font-size: 1.15rem;
          line-height: 2;
          font-weight: 300;
          color: rgba(255, 255, 255, 0.75);
        }
        .editorial-content p { margin-bottom: 2.5em; }
        .editorial-content p:first-of-type::first-letter { 
          color: #c4ac5e; 
          font-size: 4.5em; 
          float: left; 
          margin-right: 0.15em; 
          line-height: 1; 
          font-family: "Cormorant Garamond", serif; 
          font-weight: 100;
        }
        .editorial-content h2 { 
          color: #E8E0D0; 
          font-family: "Cormorant Garamond", serif; 
          font-size: 2.8em; 
          font-weight: 300; 
          margin-top: 2em; 
          margin-bottom: 1em; 
          font-italic: italic;
        }
        .editorial-content blockquote { 
          border-left: 2px solid #c4ac5e; 
          padding: 1.5em 3em; 
          margin: 4em 0; 
          font-style: italic; 
          font-size: 1.8em; 
          color: #E8E0D0; 
          font-family: "Cormorant Garamond", serif; 
          background: rgba(196,172,94,0.03); 
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s linear infinite alternate;
        }
      `}} />
    </div>
  );
}

