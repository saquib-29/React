import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("lavender")

  return (
    <div
      className = "w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl text-black shadow-lg'> <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("red")}
          style={{backgroundColor: "red"}}>
            Red
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("blue")}
          style={{backgroundColor: "blue"}}>
            Blue
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("pink")}
          style={{backgroundColor: "pink"}}>
            Pink
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("violet")}
          style={{backgroundColor: "violet"}}>
            Violet
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("grey")}
          style={{backgroundColor: "grey"}}>
            Grey
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("lavender")}
          style={{backgroundColor: "lavender"}}>
            Lavender
          </button>

          <button className='outline-none px-4 py-1 rounded-full'
          onClick={() => setColor("white")}
          style={{backgroundColor: "white"}}>
            White
          </button>

          <button className='outline-none px-4 py-1 rounded-full text-white'
          onClick={() => setColor("black")}
          style={{backgroundColor: "black"}}>
            Black
          </button>

          </div> 
        </div>
    </div>
  )
}

export default App
