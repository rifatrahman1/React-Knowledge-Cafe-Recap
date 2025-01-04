
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, set_bookmarks] = useState([]);

  const handle_bookmarks = (blog) => {
    const new_bookmarks = [...bookmarks, blog];
    set_bookmarks(new_bookmarks);
  }

  return (
    <div className='container w-[1280px] mx-auto pt-12'>
      <Header></Header>
      <div className='grid grid-cols-3 gap-6 mt-8'>
      <Blogs handle_bookmarks={handle_bookmarks}></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>

    </div>
  )
}

export default App
