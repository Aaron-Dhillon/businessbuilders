import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import AboutUs from "./AboutUs.js";
import Leadership from "./Leadership.js";
import AppForm from "./AppForm.js";
import { HelmetProvider } from 'react-helmet-async';

function App() {

  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutus" element={<AboutUs />}></Route>
          <Route path="/leadership" element = {<Leadership />}></Route>
          <Route path="/appform" element = {<AppForm />}></Route>
        </Routes>
      </BrowserRouter> 
    </HelmetProvider>
  );
}

export default App;
