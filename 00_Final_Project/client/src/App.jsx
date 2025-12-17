import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="home" element={<Home/>}></Route>
        </Route>
      </Routes> 
    </>
  )
}

export default App
