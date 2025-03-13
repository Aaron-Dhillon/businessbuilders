import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Leadership from "./Leadership.js";
import AppForm from "./AppForm.js";
import { HelmetProvider } from "react-helmet-async";
import PaymentPage from "./PaymentPage.js";
import Success from "./Success.js";
import Builders from "./Builders.js";

function App() {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/appform" element={<AppForm />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/builders" element={<Builders />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
