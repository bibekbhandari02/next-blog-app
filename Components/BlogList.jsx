import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async()=>{
    const response = await axios.get('/api/blog');
    // Filter out blogs with missing images (1732774257761_blog_pic_10.png)
    const validBlogs = response.data.blogs.filter(blog => 
      blog.image && !blog.image.includes('1732774257761')
    );
    setBlogs(validBlogs);
    console.log(validBlogs);
    
  }

  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <div className="px-5 md:px-12 lg:px-28">
      <div className="flex justify-center gap-6 my-10">
        <button onClick={()=>setMenu("All")} className={menu==="All" ?`bg-black text-white py-1 px-4 rounded-sm`:""}>
          All
        </button>
        <button onClick={()=>setMenu("Technology")} className={menu==="Technology" ?`bg-black text-white py-1 px-4 rounded-sm`:""}>Technology</button>
        <button onClick={()=>setMenu("Startup")} className={menu==="Startup" ?`bg-black text-white py-1 px-4 rounded-sm`:""}>Startup</button>
        <button onClick={()=>setMenu("Lifestyle")} className={menu==="Lifestyle" ?`bg-black text-white py-1 px-4 rounded-sm`:""}>Lifestyle</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 mb-16">
        {blogs.filter((item)=> menu==="All"?true:item.category===menu ).map((item, index) => {
          return (
            <BlogItem
              key={index}
              id={item._id}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
              priority={index === 0}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
