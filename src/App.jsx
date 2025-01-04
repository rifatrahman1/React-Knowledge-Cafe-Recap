
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <div className='container w-[1280px] mx-auto pt-12'>
      <Header></Header>
      <div className='grid grid-cols-3 gap-6 mt-8'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>

    </div>
  )
}

export default App
