import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import blogData from '../demoBlogData.json'

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    const [Form, setForm] = useState({
        title: '',
        category: 'all',
    })

    useEffect(() => {
        setBlogs(blogData)
    }, []);

    const navigate = useNavigate();

    const handleBlogClick = (blogId) => {
        navigate(`/blog/${blogId}`);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const title = Form.title.toLowerCase();
        const category = Form.category;

        let filteredBlogs = blogData;

        if (category !== 'all') {
            filteredBlogs = filteredBlogs.filter(blog => blog.category.toLowerCase() === category.toLowerCase());
        }

        if (title !== '') {
            filteredBlogs = filteredBlogs.filter(blog => blog.title.toLowerCase().includes(title));
        }

        setBlogs(filteredBlogs);
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Blog Posts</h2>
            <form onSubmit={handleSearch} className='flex gap-4'>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className='border p-2 rounded'
                    value={Form.title}
                    onChange={handleInputChange}
                    placeholder="Search by title"
                />
                <select
                    name="category"
                    id="category"
                    className='border p-2 rounded'
                    value={Form.category}
                    onChange={handleInputChange}
                >
                    <option value="all">All</option>
                    <option value="Node.js">Node.js</option>
                    <option value="React">React</option>
                    <option value="JavaScript">JavaScript</option>
                </select>
                <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded'>Search</button>
            </form>
            <ul className="space-y-6">
                {blogs.map((blog) => (
                    <li key={blog.id} className="border border-gray-300 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={() => handleBlogClick(blog.id)}>
                        <h3 className="text-xl font-semibold text-blue-600">{blog.title}</h3>
                        <div className="text-sm text-gray-500 mb-2">
                            <span className="mr-4">Category: {blog.category}</span>
                            <span>Created: {new Date(blog.creationDate).toLocaleDateString()}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogList;
