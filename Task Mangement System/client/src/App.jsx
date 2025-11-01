import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Login';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout2/>}>
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="home" element={<Home/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
