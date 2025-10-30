import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Insert from './components/Insert'
import Display from './components/Display'
import Layout from './components/Layout'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="insert" element={<Insert/>}></Route>
          <Route path="display" element={<Display/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
