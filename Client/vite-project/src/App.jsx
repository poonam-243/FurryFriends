import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adopt from "./../Components/Adopt.jsx";
import Adoptform from "./../Components/Adoptform.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Adopt />} />
        <Route path="/Adoptform" element={<Adoptform />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
