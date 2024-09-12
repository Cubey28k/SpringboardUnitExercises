import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

/** Main application: depending on path, show different components. */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/soda" element={<Soda />} />
        <Route path="/chips" element={<Chips />} />
        <Route path="/sardines" element={<Sardines />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
