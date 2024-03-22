import { useState } from 'react'
import "./style.css"
import explorer from './data/content'
import Folder from './components/folder'

function App() {
  const [data,setData] = useState(explorer);
  return (
    <>
      <div className="App">
        <Folder explorer={data} />
      </div>
    </>
  )
}

export default App
