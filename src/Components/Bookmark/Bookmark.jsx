import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div >
            
           <div className='bg-white rounded-lg cursor-pointer'>
           <h3 className='text-[18px] font-semibold p-5  rounded-lg space-y-4'>{title}</h3>
           </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;