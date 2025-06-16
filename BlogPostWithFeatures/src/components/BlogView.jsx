import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../demoBlogData.json';
import DOMPurify from 'dompurify';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogView = () => {
    const id = useParams().blogId;
    const blog = blogData.find((blog) => blog.id === parseInt(id));

    if (!blog) {
        return (
            <div className="max-w-4xl mx-auto p-4 text-center text-gray-500">
                Select a blog post to view details.
            </div>
        );
    }

    // Function to parse HTML content and separate code blocks for syntax highlighting
    const renderContent = () => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(blog.content, 'text/html');
        const elements = Array.from(doc.body.childNodes);

        return elements.map((el, index) => {
            if (el.nodeName === 'PRE' && el.firstChild && el.firstChild.nodeName === 'CODE') {
                const code = el.firstChild.textContent;
                const languageClass = el.firstChild.className || '';
                const languageMatch = languageClass.match(/language-(\w+)/);
                const language = languageMatch ? languageMatch[1] : 'javascript';

                return (
                    <SyntaxHighlighter
                        key={index}
                        language={language}
                        style={oneDark}
                        showLineNumbers
                        wrapLongLines
                    >
                        {code}
                    </SyntaxHighlighter>
                );
            } else {
                return (
                    <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(el.outerHTML || el.textContent) }}
                    />
                );
            }
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
            <h2 className="text-4xl font-bold mb-4 text-blue-700">{blog.title}</h2>
            <div className="text-sm text-gray-500 mb-6">
                <span className="mr-6">Category: {blog.category}</span>
                <span>Created: {new Date(blog.creationDate).toLocaleDateString()}</span>
            </div>
            {blog.image && (
                <div className="mb-6">
                    <img
                        src={blog.image.url}
                        alt={blog.image.alt}
                        className="w-full h-auto rounded-md shadow-sm"
                    />
                </div>
            )}
            <div className="prose max-w-none" style={{ all: 'unset' }}>
                {renderContent()}
            </div>
        </div>
    );
};

export default BlogView;
