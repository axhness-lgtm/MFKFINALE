import { Header } from '@/components/navigation/Header';
import { Footer } from '@/components/navigation/Footer';
import { FadeIn } from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

// Mock data (would come from Firestore in production)
const blogPosts = [
  {
    title: "The Art of Bespoke: A Legacy Since 1940",
    excerpt: "Discover the heritage of MFKhan and our commitment to uncompromising craftsmanship that has defined Visakhapatnam's sartorial style for generations.",
    slug: "art-of-bespoke",
    image: "/images/fabric-silk.jpg",
    date: "April 12, 2026",
    category: "Heritage"
  },
  {
    title: "Choosing the Perfect Wedding Sherwani",
    excerpt: "A guide to selecting the right fabric, cut, and embroidery for your special day. From traditional styles to modern silhouettes.",
    slug: "perfect-wedding-sherwani",
    image: "/images/fabric-velvet.jpg",
    date: "April 10, 2026",
    category: "Wedding"
  },
  {
    title: "2026 Formal Trends: Power & Precision",
    excerpt: "The evolution of the business suit and how to project authority through tailoring in the modern professional landscape.",
    slug: "formal-trends-2026",
    image: "/images/fabric-linen.jpg",
    date: "April 08, 2026",
    category: "Style Guide"
  }
];

export default function BlogPage() {
  return (
    <div className="bg-[#0a0a09] min-h-screen text-[#E8E0D0]">
      <Header />
      
      <section className="pt-48 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <span className="gold-text uppercase tracking-[0.5em] text-[10px] font-bold">The Library</span>
            <h1 className="text-5xl md:text-8xl font-serif font-light leading-tight italic">Journal</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {blogPosts.map((post, idx) => (
              <FadeIn key={idx} delay={idx * 100}>
                <Link href={`/blog/${post.slug}`} className="group block space-y-6">
                  <div className="relative aspect-[16/10] overflow-hidden border border-white/5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-bold">
                      <span className="text-accent">{post.category}</span>
                      <span className="text-white/20">|</span>
                      <span className="text-white/40">{post.date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif leading-tight group-hover:text-white transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/50 text-base font-light font-sans leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block text-[10px] uppercase tracking-[0.2em] border-b border-accent/30 pb-1 group-hover:border-accent group-hover:text-white transition-all">
                      Read Entry
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
