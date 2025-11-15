import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Insert from './components/Insert';
import Layout from './components/Layout';
import Display from './components/Display';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="insert" element={<Insert/>}></Route>
            <Route path="display" element={<Display/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
