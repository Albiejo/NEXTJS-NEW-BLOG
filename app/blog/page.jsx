import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import fs, { readFileSync } from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");

const blogs = dirContent.map((file) => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

const Blog = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-2xl"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={500} // Specify the width and height of the image
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {blog.title}
              </h3>
              <p className="mt-2">{blog.description}</p>
              <div className="mt-4 mb-2">
                <span>
                  By {blog.author} on {blog.date}
                </span>
              </div>

              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
