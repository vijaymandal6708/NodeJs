import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Update from "./components/Update";
import Search from "./components/Search";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/home" element={<Home/>} />
          <Route path="insert" element={<Insert/>} />
          <Route path="display" element={<Display/>} />
          <Route path="search" element={<Search/>} />
          <Route path="update" element={<Update />} />
          <Route path="edit/:id" element={<Edit />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
