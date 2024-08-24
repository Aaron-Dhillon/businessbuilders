import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
