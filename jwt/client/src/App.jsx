import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
             <Route path="home" element={<Home/>}>Home</Route>
             <Route path="login" element={<Login/>}>Login</Route>
             <Route path="registration" element={<Registration/>}>Registration</Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
