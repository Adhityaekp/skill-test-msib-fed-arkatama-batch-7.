"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../features/store";
import { fetchBlogs } from "../../features/blogSlice";

const BlogComponent: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState) => state.blog.data);
  const status = useSelector((state: RootState) => state.blog.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBlogs());
    }
  }, [dispatch, status]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{blog.title}</h2>
            <p className="mt-2 text-gray-700">{blog.content}</p>
          </div>
        ))}
      {status === "failed" && <p>Error loading blogs.</p>}
    </div>
  );
};

export default BlogComponent;
