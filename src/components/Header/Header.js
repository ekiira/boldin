import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/images/logo.svg";
import menu from "../../assets/images/menu.png";
import rocket from "../../assets/images/rocket.png";

import "./header.scss";
function Header({ setOpenRequestForm, setNavMenu }) {
  return (
    <div className="header">
      <Navbar expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <img src={logo} alt="brand-logo" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Item
              href="#"
              className="work-text mr-3 d-none d-lg-flex"
              onClick={() => setOpenRequestForm(true)}
            >
              Work with us{" "}
              <span>
                <img src={rocket} alt="rocket" className='header' />
              </span>
            </Nav.Item>
            <Nav.Item
              href="#"
              className="menubtn"
              onClick={() => setNavMenu(true)}
            >
              <img src={menu} alt="menu" />
            </Nav.Item>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
