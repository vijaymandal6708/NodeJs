import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Layout></Layout>}>
             <Route index element={<Home></Home>}></Route>
           </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
