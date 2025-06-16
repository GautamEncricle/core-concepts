import React, { useState } from 'react';
import BlogList from './components/BlogList';

const initialPosts = [
  { id: 1, title: 'First Post', content: 'This is the first blog post.' },
  { id: 2, title: 'Second Post', content: 'Another blog post.' },
]

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">My Blog</h1>
      <BlogList posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default App;
