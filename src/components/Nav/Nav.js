import "./nav.scss";

import Nav from "react-bootstrap/Nav";

import logo from "../../assets/images/logo.svg";
import logoW from "../../assets/images/logo-w.svg";
import rocket from "../../assets/images/rocket.png";
import close from "../../assets/images/close.svg";

function NavMenu({
  setNavMenu,
  setOpenRequestForm,
  openNavMenu,
  setCheckNavMenu,
}) {
  return (
    <div className={`nav-menu ${openNavMenu ? `show` : `hide`}`}>
      <div className="nav-menu-overlay"></div>
      <div className="container-fluid">
        <div className="head py-4 ">
          <div className="col-12 d-flex justify-content-between w-100">
            <div>
              <button className="btn">
                <img src={logo} alt="logo" className="d-none d-md-flex" />
                <img src={logoW} alt="logo" className="d-flex d-md-none" />
              </button>
            </div>
            <div className="d-flex">
              <Nav.Item
                href="#"
                className="work-text mr-2 d-none d-md-flex"
                onClick={() => {
                  setOpenRequestForm(true);
                  setCheckNavMenu(false);
                }}
              >
                Work with us{" "}
                <span>
                  <img src={rocket} alt="rocket" className="rocket" />
                </span>
              </Nav.Item>
              <button
                className="btn"
                onClick={() => {
                  setNavMenu(false);
                  setCheckNavMenu(true);
                }}
              >
                <img src={close} alt="close" />
              </button>
            </div>
          </div>
          <div className="row justify-content-end  align-items-center links-w py-5 py-md-3 ">
            <div className="col-12 col-md-6 navmenu-links order-2 px-3 px-md-5">
              <div>
                <ul>
                  <li>About us</li>
                  <li>Works</li>
                  <li>Service</li>
                  <li>Contact us</li>
                </ul>
                <div className="socials pt-4">
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
