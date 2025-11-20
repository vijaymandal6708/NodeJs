import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route index element={<Home/>}></Route>
             <Route path="home" element={<Home/>}></Route>
             <Route path="home2" element={<Home2/>}></Route>
             <Route path="home3" element={<Home3/>}></Route>
             <Route path="login" element={<Login/>}></Route>
             <Route path="registration" element={<Registration/>}></Route>
             <Route path="dashboard" element={<Dashboard/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
