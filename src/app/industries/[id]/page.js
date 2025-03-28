import blogData from "@/app/industries/data"; 
import BlogDetail from "@/app/industries/[id]/ajax"; 

export async function generateStaticParams() {
  const params = blogData.map((blog) => ({ id: blog.id.toString() }));
  return params;
}

export default function BlogPage({ params }) {
  const { id } = params;
  const blog = blogData.find((blog) => blog.id === parseInt(id, 10));

  if (!blog) {
    return <p>Blog not found.</p>;
  }

  return <BlogDetail blog={blog} />;
}