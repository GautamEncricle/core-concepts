import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts, onDelete }) => {
    return (
        <div className="space-y-4">
            {posts.map((post) => (
                <BlogPost
                    key={post.id}
                    id={post.id}
                    title={post.title}
                    content={post.content}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default BlogList;
