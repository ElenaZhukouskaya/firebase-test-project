import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import ElementPage from "./ElementPage/ElementPage";
import ViewPage from "./ViewPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="element/new" element={<ElementPage />}></Route>
          <Route path="new/:id" element={<ElementPage />}></Route>
          <Route path="view/:id" element={<ViewPage />}></Route>
          <Route path="*" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
