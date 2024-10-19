import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Get the absolute path to the content directory
const contentDir = path.join(process.cwd(), "content");

const dirContent = fs.readdirSync(contentDir, "utf-8");

const blogs = dirContent.map(file => {
    const fileContent = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data } = matter(fileContent);
    return { ...data, slug: file.replace(/\.md$/, "") }; // Add slug to each blog post
});

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
const Blog = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
                        <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                            <p className="mb-4">{blog.description}</p>
                            <div className="text-sm mb-4">
                                <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
                            </div>
                            <Link href={`/blogpost[slug]${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                                Click here
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;