import { posts } from '../../data/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GetStaticProps } from 'next';
import { BlogPost as BlogPostType } from '../../types/blog';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = posts.find(post => post.slug === params?.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
};

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <Link href="/" className="text-blue-600 hover:underline mb-8 inline-block">
        ← Ana Sayfaya Dön
      </Link>
      
      <article className="prose lg:prose-xl">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex gap-4 text-gray-500 mb-8">
          <span>{post.date}</span>
          <span>{post.author}</span>
        </div>
        <div className="mt-8">
          {post.content}
        </div>
      </article>
    </main>
  );
} 