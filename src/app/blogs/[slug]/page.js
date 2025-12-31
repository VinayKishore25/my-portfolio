import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import BlogDetailClient from "./BlogDetailClient";

const BlogDetailPage = async ({ params }) => {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  return <BlogDetailClient post={post} />;
};

export default BlogDetailPage;

// Pre-generate static params so Next.js can build detail pages and avoid 404 when deployed statically.
export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
