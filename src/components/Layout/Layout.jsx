import { Footer } from "../Footer";
import { Navbar } from "../Navbar";
import { TextSlider } from "../TextSlider";

export const Layout = ({ children }) => {
  const texts = ["Text 1", "Text 2", "Text 3"];
  return (
    <div style={{ maxWidth: "100%", overflow: "hidden" }}>
      <TextSlider texts={texts} />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
