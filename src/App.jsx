import { Route, Routes } from "react-router-dom";
import {
  Careers,
  ContactUs,
  Customers,
  Home,
  Job,
  Products,
  Projects,
  Technologies,
} from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact us" element={<ContactUs />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/products" element={<Products />} />
      <Route path="/projects/:customer" element={<Projects />} />
      <Route path="/job/:job" element={<Job />} />
    </Routes>
  );
};

export default App;
