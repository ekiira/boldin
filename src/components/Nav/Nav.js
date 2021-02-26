import "./nav.scss";

import logo from "../../assets/images/logo.svg";
import logoW from "../../assets/images/logo-w.svg";

import close from "../../assets/images/close.svg";

function NavMenu({setNavMenu}) {
  return (
    <div className="nav-menu">
      <div className="nav-menu-overlay"></div>
      <div className="container">
        <div className="head py-4 ">
          <div className="col-12 d-flex justify-content-between w-100">
            <div>
              <button className="btn">
                <img src={logo} alt="logo" className="d-none d-md-flex" />
                <img src={logoW} alt="logo" className="d-flex d-md-none" />
              </button>
            </div>
            <div>
              <button className="btn" onClick={() => setNavMenu(false)}>
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="row justify-content-end py-5 py-md-3 ">
            <div className="col-12 col-md-6 navmenu-links order-2 px-5">
              <div>
                <ul>
                  <li>About us</li>
                  <li>Works</li>
                  <li>Services</li>
                  <li>Blog</li>
                  <li>Contact us</li>
                </ul>
                <div className="socials pt-3">
                  <p>Social</p>
                  <div className="d-flex justify-content-between">
                    <p className="social mr-3">Linkedin</p>
                    <p className="social mr-3">Facebook</p>
                    <p className="social mr-3">Twitter</p>
                    <p className="social">Instagram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavMenu;
