
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, set_bookmarks] = useState([]);
  const [spent_time, set_spent_time] = useState(0);

  const handle_spent_time = (id, time) => {
    const new_spent_time = spent_time + time;
    set_spent_time(new_spent_time);

    console.log('id oyala patti paichi..', id)

    const remaining = bookmarks.filter(bookmark => bookmark.id !== id);
    set_bookmarks(remaining);
  }

  const handle_bookmarks = (blog) => {
    const new_bookmarks = [...bookmarks, blog];
    set_bookmarks(new_bookmarks);
  }

  return (
    <div className='container w-[1280px] mx-auto pt-12'>
      <Header></Header>
      <div className='grid grid-cols-3 gap-6 mt-8'>
      <Blogs handle_bookmarks={handle_bookmarks} handle_spent_time={handle_spent_time}></Blogs>
      <Bookmarks bookmarks={bookmarks} spent_time={spent_time}></Bookmarks>
      </div>

    </div>
  )
}

export default App
