'use client';

import Link from 'next/link';
import { useState } from 'react';
import { posts } from './data/posts';
import SearchBar from './components/SearchBar';
import SocialLinks from './components/SocialLinks';
import { siteConfig } from './config/site';

export default function Home() {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredPosts(filtered);
  };

  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">{siteConfig.site.title}</h1>
        <p className="text-gray-600">{siteConfig.site.description}</p>
        <div className="mt-4 text-sm text-gray-500">
          <span>{siteConfig.author.shortBio}</span>
        </div>
        <SocialLinks />
      </div>
      
      <SearchBar onSearch={handleSearch} />
      
      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">Aramanızla eşleşen yazı bulunamadı.</p>
      ) : (
        <div className="grid gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-600">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
