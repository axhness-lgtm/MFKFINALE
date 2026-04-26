import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';
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
    title: `${post.title} | MFKhan Journal`,
    description: post.excerpt,
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let post: any = null;
  try {
    const q = query(collection(db, 'blogs'), where('slug', '==', slug));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      post = snapshot.docs[0].data();
    }
  } catch (error) {
    console.error("Failed to fetch blog post", error);
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#0d0606] min-h-screen">
      <Header />
      
      <article className="pt-40 md:pt-60 pb-32">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <FadeIn className="text-center mb-16 space-y-8">
            <div className="flex items-center justify-center gap-4 text-[10px] md:text-[12px] uppercase tracking-widest font-bold">
              <span className="text-accent">{post.category || 'Journal'}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/40">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight drop-shadow-xl" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              {post.title}
            </h1>
            <div className="w-16 h-[1px] bg-accent/40 mx-auto mt-12" />
          </FadeIn>
        </div>

        {post.image && (
          <FadeIn delay={200} className="relative w-full h-[50vh] md:h-[70vh] max-w-[1400px] mx-auto mb-20 md:mb-24 overflow-hidden border-y md:border border-white/5 md:rounded-sm group">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover opacity-90 transition-transform duration-[3s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0606] via-[#0d0606]/20 to-transparent" />
          </FadeIn>
        )}

        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <FadeIn delay={400} className="prose prose-brand max-w-none">
            {/* Lead excerpt */}
            {post.excerpt && (
              <p className="text-xl md:text-2xl text-[#E8E0D0] font-serif italic leading-relaxed mb-12 text-center" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                "{post.excerpt}"
              </p>
            )}
             
            {/* The blog content */}
            <div 
              className="text-lg md:text-xl font-light leading-relaxed text-white/80 space-y-8 tracking-wide drop-shadow-sm" 
              style={{ fontFamily: '"Spectral", serif' }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeIn>
          
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 relative">
             {/* Simple elegant signature line */}
             <div className="text-center md:text-left">
                <span className="gold-text uppercase tracking-widest text-[10px]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>Written by</span>
                <p className="text-white text-xl font-serif mt-2 italic drop-shadow-lg">MFKhan Maison</p>
             </div>
             <Link href="/blog" className="hero-btn-secondary md:absolute md:left-1/2 md:-translate-x-1/2">
                Return to Library
             </Link>
          </div>
        </div>
      </article>

      <Footer />
      
      {/* Editorial Custom Styling for Rich Text inside .prose-brand */}
      <style dangerouslySetInnerHTML={{__html: `
        .prose-brand p { margin-bottom: 2em; line-height: 1.85; color: rgba(255,255,255,0.7); }
        .prose-brand p:first-of-type::first-letter { color: #c4ac5e; font-size: 3em; float: left; margin-right: 0.1em; line-height: 1; font-family: "Cormorant Garamond", serif; }
        .prose-brand h2 { color: #E8E0D0; font-family: "Cormorant Garamond", serif; font-size: 2.5em; font-weight: 300; margin-top: 2em; margin-bottom: 1em; }
        .prose-brand h3 { color: #c4ac5e; font-family: "Spectral", serif; font-size: 1.2em; font-weight: 600; margin-top: 2em; margin-bottom: 1em; letter-spacing: 0.05em; text-transform: uppercase; }
        .prose-brand blockquote { border-left: 1px solid #c4ac5e; padding: 1.5em 2em; margin: 3em 0; font-style: italic; font-size: 1.5em; color: #E8E0D0; font-family: "Cormorant Garamond", serif; background: rgba(196,172,94,0.02); }
        .prose-brand a { color: #c4ac5e; text-decoration: underline; text-underline-offset: 4px; transition: color 0.3s ease; }
        .prose-brand a:hover { color: #fff; }
        .prose-brand strong { color: #E8E0D0; font-weight: 500; }
        .prose-brand ul { list-style-type: none; padding-left: 1em; margin-bottom: 2em; }
        .prose-brand ul li { margin-bottom: 0.8em; position: relative; }
        .prose-brand ul li::before { content: "—"; color: #c4ac5e; position: absolute; left: -1.5em; }
        .prose-brand img { width: 100%; height: auto; margin: 3em 0; border: 1px solid rgba(255,255,255,0.05); }
      `}} />
    </div>
  );
}
