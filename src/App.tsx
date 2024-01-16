import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutAnimation from "./components/pages/LayoutAnimation/LayoutAnimation";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutAnimation />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
