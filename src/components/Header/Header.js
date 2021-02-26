import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";
import rocket from "../../assets/images/rocket.png";

import "./header.scss";
function Header() {
  return (
    <div className="header">
      <Navbar expand="lg">
        <div className="container-fluid">
          <Navbar.Brand href="/">
            <img src={logo} alt="brand-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span>
              <img src={menu} alt="menu" />
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="work-text mr-3">
                work with us{" "}
                <span>
                  <img src={rocket} alt="rocket" />
                </span>
              </Nav.Link>
              <Nav.Item href="#link">
                <img src={menu} alt="menu" />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Header;
