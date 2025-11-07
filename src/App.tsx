import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SeaSaw from "./pages/SeaSaw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seasaw" element={<SeaSaw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
