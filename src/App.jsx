import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import LightSwitch from './pages/LightSwitch'
import NewBook from './pages/NewBook'
import Library from './pages/Library'
import SingleBook from './pages/SingleBook'

function App() {

  const [lightIsOn, setLightIsOn] = useState(false);
  const [books, setBooks] = useState([]);

  return (
    <div id='app-container'>
      <Sidebar lightIsOn={lightIsOn} />
      <Routes>
        <Route path="/" element={<LightSwitch
          lightIsOn={lightIsOn}
          setLightIsOn={setLightIsOn}
        />}
        />
        <Route path="/new" element={<NewBook books={books} setBooks={setBooks} />} />
        <Route path="/library" element={<Library books={books}/>} />
        <Route path="/single_book" element={<SingleBook books={books}/>} />

      </Routes>
    </div>
  )
}

export default App
