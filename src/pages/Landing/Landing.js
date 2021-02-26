import Header from "../../components/Header/Header";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Blog from "./Blog/Blog";
import Footer from "../../components/Footer/Footer";

function Landing() {
  return (
    <div>
      <Header />
      <Home />
      <Services />
      <Work/>
      <Contact/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Landing;
