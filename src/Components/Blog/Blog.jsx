import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog, handle_bookmarks, handle_spent_time}) => {
    const {id, cover, title, author_img, author, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='border-b-2 pb-9 mb-9'>
            <img className='w-full rounded-xl' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-9'>
                <div className='flex items-center gap-6'>
                <img className='w-16 rounded-full h-16' src={author_img} alt="" />
                <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <p className='text-[#11111199]'>{posted_date}</p>
                </div>
                </div>
                <div className='text-xl font-bold text-[#11111199] flex items-center gap-3'>
                    <p>{reading_time} min read</p>
                    <button onClick={() => handle_bookmarks(blog)} className='hover:text-purple-600 duration-500'><FaBookmark /></button>
                </div>
            </div>
            <h1 className='mt-4 text-[40px] font-bold'>{title}</h1>
            <p className='text-xl text-[#11111199] mt-4'>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={() => handle_spent_time(id, reading_time)} className='text-xl font-bold text-[#6047EC] border-b-2 border-blue-600 hover:text-purple-800 duration-500 hover:border-purple-800 mt-5'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handle_bookmarks: PropTypes.func.isRequired,
    handle_spent_time: PropTypes.func.isRequired
}
export default Blog;