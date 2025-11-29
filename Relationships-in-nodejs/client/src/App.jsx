import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Insert from './components/Insert';
import Display from './components/Display';
import Display2 from './components/Display2';


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
            <Route path="display2" element={<Display2/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
