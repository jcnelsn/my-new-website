'use client'

import React from 'react';
import Layout from '@/components/layout';

export default function BlogPost() {
  return (
    <Layout>
      <article className="prose prose-orange max-w-none">
        <h1 className="text-2xl font-medium text-orange-950 mb-4">
          How AI built my website in 2 days
        </h1>
        
        <div className="flex items-center gap-3 text-sm text-orange-800/70 mb-8">
          <span>March 2024</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        <div className="space-y-6 text-orange-800/90">
          <p>
            Content coming soon...
          </p>
          {/* Add your blog content here */}
        </div>
      </article>
    </Layout>
  );
} 