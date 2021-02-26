import { useState } from "react";
import Header from "../../components/Header/Header";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Blog from "./Blog/Blog";
import Footer from "../../components/Footer/Footer";
import WorkRequest from "../../components/WorkRequestForm/WorkRequestForm";
import NavMenu from "../../components/Nav/Nav";

function Landing() {
  const [openRequestForm, setOpenRequestForm] = useState(false);
  const [openNavMenu, setNavMenu] = useState(false);

  const displayCheck = () => {
    if (openNavMenu || openRequestForm) {
      return null;
    } else {
      return (
        <>
          <Header
            setOpenRequestForm={setOpenRequestForm}
            setNavMenu={setNavMenu}
          />
          <Home />
          <Services />
          <Work />
          <Contact />
          <Blog />
          <Footer />
        </>
      );
    }
  };
  return (
    <div>
      <>
        {openRequestForm ? (
          <WorkRequest setOpenRequestForm={setOpenRequestForm} />
        ) : null}
      </>
      <>{openNavMenu ? <NavMenu setNavMenu={setNavMenu} /> : null}</>

      {displayCheck()}
    </div>
  );
}

export default Landing;
