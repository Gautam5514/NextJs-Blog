import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// Get the absolute path to the content directory
const contentDir = path.join(process.cwd(), 'src', 'content');

// Function to define dynamic routes based on slugs
export async function getStaticPaths() {
    const files = fs.readdirSync(contentDir);
    
    const paths = files.map((fileName) => {
        const slug = fileName.replace('.md', ''); // Remove the .md extension to get the slug
        return {
            params: { slug },
        };
    });

    return {
        paths,
        fallback: false, // Return a 404 if the slug is not found
    };
}

// Fetch data for each blog post based on the slug
export async function getStaticProps({ params }) {
    const { slug } = params;
    const filePath = path.join(contentDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent); // Extract frontmatter and content

    return {
        props: {
            frontmatter: data,
            content,
        },
    };
}

// Render the blog post
const BlogPost = ({ frontmatter, content }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">{frontmatter.title}</h1>
            <img src={frontmatter.image} alt={frontmatter.title} className="w-full h-64 object-cover mb-4" />
            <div className="text-sm mb-4">
                <span>By {frontmatter.author}</span> | <span>{new Date(frontmatter.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
            </div>
            <ReactMarkdown className="prose lg:prose-xl">{content}</ReactMarkdown>
        </div>
    );
};

export default BlogPost;
