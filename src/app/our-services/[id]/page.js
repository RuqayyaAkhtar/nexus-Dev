
import blogData from "@/app/our-services/data"; 
import BlogDetail from "@/app/our-services/[id]/jsx"; 

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
