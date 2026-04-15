import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data
const blogPosts = {
  "art-of-bespoke": {
    title: "The Art of Bespoke: A Legacy Since 1940",
    content: "Content for Art of Bespoke...",
    image: "/images/fabric-silk.jpg",
    date: "April 12, 2026",
    category: "Heritage",
    metaTitle: "Art of Bespoke | MFKhan International",
    metaDesc: "Discover the 80-year legacy of luxury tailoring."
  },
  "perfect-wedding-sherwani": {
    title: "Choosing the Perfect Wedding Sherwani",
    content: "Content for Wedding Sherwani...",
    image: "/images/fabric-velvet.jpg",
    date: "April 10, 2026",
    category: "Wedding",
    metaTitle: "Best Wedding Sherwani Guide | MFKhan",
    metaDesc: "How to choose the perfect sherwani for your big day."
  },
  "formal-trends-2026": {
    title: "2026 Formal Trends: Power & Precision",
    content: "Content for Normal Trends...",
    image: "/images/fabric-linen.jpg",
    date: "April 08, 2026",
    category: "Style Guide",
    metaTitle: "2026 Men's Formal Trends | MFKhan",
    metaDesc: "Project authority with the latest in tailoring precision."
  }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#0a0a09] min-h-screen text-[#E8E0D0]">
      <Header />
      
      <article className="pt-60 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="text-center mb-16 space-y-6">
            <div className="flex items-center justify-center gap-4 text-[10px] uppercase tracking-widest font-bold">
              <span className="text-accent">{post.category}</span>
              <span className="text-white/20">|</span>
              <span className="text-white/40">{post.date}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-light leading-tight italic">{post.title}</h1>
          </FadeIn>

          <FadeIn delay={200} className="relative aspect-[21/9] mb-16 overflow-hidden border border-white/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-90"
            />
          </FadeIn>

          <FadeIn delay={400} className="prose prose-invert prose-brand max-w-none">
            <div className="text-lg md:text-xl font-light font-sans leading-relaxed text-white/70 space-y-8">
              <p>{post.content}</p>
              <p>
                At MFKhan International, every piece is more than just a garment. It's a statement of identity, refined by generations of expertise. Since 1940, our commitment to the perfect fit remains unchanged.
              </p>
            </div>
          </FadeIn>
          
          <div className="mt-20 pt-10 border-t border-white/5 text-center">
             <Link href="/blog" className="text-xs uppercase tracking-[0.2em] text-accent hover:text-white transition-colors">
                Back to Journal
             </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
