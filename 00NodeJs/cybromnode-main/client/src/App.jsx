import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import Home from "./components/Home";
import Insert from "./components/Insert";
import Display from "./components/Display";
import Update from "./components/Update";
import Search from "./components/Search";

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/home" element={<Home />} />
          <Route path="insert" element={<Insert />} />
          <Route path="display" element={<Display />} />
          <Route path="update" element={<Update />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
