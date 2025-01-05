import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handle_bookmarks, handle_spent_time}) => {
    const [blogs, set_blogs] = useState([]);
    useEffect (() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => set_blogs(data))
    }, [])
    return (
        <div className="col-span-2">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handle_bookmarks={handle_bookmarks} handle_spent_time={handle_spent_time}></Blog>)
            }
        </div>
    );
};

Blogs.propsTypes = {
    handle_bookmarks: PropTypes.func.isRequired,
    handle_spent_time: PropTypes.func.isRequired
}
export default Blogs;