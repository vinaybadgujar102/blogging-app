import BlogCard from "../components/BlogCard";
import Appbar from "../components/Appbar";
import { useBlogs } from "../hooks";
import Skeleton from "../components/Skeleton";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  console.log(blogs);

  if (loading) {
    return (
      <div className="flex justify-center">
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }

  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title || "Anonymous"}
              content={blog.content}
              authorName="Vinay Badgujar"
              publishedDate={"2 Feb"}
            />
          ))}
          <BlogCard
            title="4 useState Mistakes You Should Avoid in React🚫"
            content="Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but often"
            authorName="Jayanth babu Sir"
            id={"1"}
            publishedDate="Jan 25, 2024"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
