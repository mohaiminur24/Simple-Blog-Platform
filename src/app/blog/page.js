"use client"
import { useEffect, useState } from "react";
import HomeSingleBlog from "../ReuseableComponents/HomeSingleBlog";

const blogPage = () => {
    const [Blog, setBlog] = useState(null);
  useEffect(()=>{
    fetch("blog.json").then(res=> res.json())
    .then(data=> setBlog(data.articles));
  },[]);

  return (
    <div>
      {
        Blog && Blog.map((singleBlog,index)=> <HomeSingleBlog key={index}  Blog={singleBlog}/>)
      }
    </div>
  )
};

export default blogPage;