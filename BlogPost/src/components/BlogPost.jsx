import React from 'react';

const BlogPost = ({ id, title, content, onDelete }) => {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="text-gray-700 my-2">{content}</p>
            <button
                onClick={() => onDelete(id)}
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    );
};

export default BlogPost;