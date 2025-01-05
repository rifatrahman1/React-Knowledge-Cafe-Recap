import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="col-span-1">
            <div className='bg-[#6047EC1A] px-12 py-5 rounded-xl border border-[#6047EC]'>
                <h1 className='text-2xl font-bold text-[#6047EC]'>Spent time on read : </h1>
            </div>
            <div className='bg-[#1111110D] p-8 space-y-4 rounded-xl mt-6'>
            <h1 className='text-2xl font-bold'>Booksmarked Blog : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}
export default Bookmarks;