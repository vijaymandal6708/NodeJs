import './App.css';
import Home from './pages/Home';
import Layout from './pages/layout';
import Insert from './pages/insert';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/home" element={<Home />}></Route>
          <Route path="/insert" element={<Insert />}></Route>
          {/* <Route path="/display" element={<Display />}></Route> */}
          {/* <Route path="/update" element={<Update />}></Route> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
