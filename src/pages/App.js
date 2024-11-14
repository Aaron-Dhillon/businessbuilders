import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Leadership from "./Leadership.js";
import AppForm from "./AppForm.js";
import PaymentPage from "./PaymentPage.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/appform" element={<AppForm />} />
        <Route path="/payment" element={<PaymentPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
