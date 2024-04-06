import React from "react";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-xl">
        <BlogCard
          title="4 useState Mistakes You Should Avoid in React🚫"
          content="Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but often"
          authorName="Jayanth babu Sir"
          publishedDate="Jan 25, 2024"
        />
        <BlogCard
          title="4 useState Mistakes You Should Avoid in React🚫"
          content="Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but often"
          authorName="Jayanth babu Sir"
          publishedDate="Jan 25, 2024"
        />
        <BlogCard
          title="4 useState Mistakes You Should Avoid in React🚫"
          content="Introduction React.js has become a cornerstone of modern web development, with its unique approach to managing state within components. One common hook, useState, is fundamental but often"
          authorName="Jayanth babu Sir"
          publishedDate="Jan 25, 2024"
        />
      </div>
    </div>
  );
};

export default Blogs;
