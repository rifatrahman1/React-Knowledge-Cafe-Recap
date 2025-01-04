
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, set_blogs] = useState([]);
    useEffect (() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => set_blogs(data))
    }, [])
    return (
        <div className="col-span-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;