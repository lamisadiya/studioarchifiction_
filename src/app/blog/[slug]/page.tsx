// src/app/blog/[slug]/page.tsx
import { redirect } from "next/navigation";
import Image from "next/image";
import { BLOG_POSTS } from "@/lib/constants";
import { Metadata } from "next";

type Props = { params: { slug: string } };

// THIS IS THE FIX — tells Next.js all possible slugs at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  return {
    title: post ? `${post.title} | CUBIC Blog` : "Blog Post",
    description: post?.excerpt || "Read our latest insights",
  };
}

export default function BlogPost({ params }: Props) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) redirect("/blog");

  const safeContent = post.fullContent ?? `<p class="text-gray-300 py-20 text-center text-2xl">Coming soon...</p>`;

  return (
    <article className="min-h-screen bg-linear-to-b from-gray-950 via-gray-900 to-black text-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <header className="text-center mb-16">
          <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider mb-6">
            {post.tag || "BLOG"}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
            {post.title}
          </h1>
          <div className="mt-8 text-gray-400 text-lg">
            <span>By CUBIC</span> • <span>{post.date}</span>
          </div>
        </header>

        {post.image && (
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 -mx-6 md:mx-0">
            <Image
              src={post.image}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-96 md:h-[520px] object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:text-white prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-justify prose-li:text-gray-300 prose-li:marker:text-red-500 prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: safeContent }}
        />

        <div className="mt-24 text-center">
          <a href="/blog" className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-full shadow-2xl">
            ← Back to All Posts
          </a>
        </div>
      </div>
    </article>
  );
}