import logo from "../../assets/images/logo.png";

import "./footer.scss";
function Footer() {
  return (
    <div className="footer py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3 logo">
            <div>
              <img src={logo} alt="brand-logo" />
            </div>
          </div>
          <div className="col-12 col-md-6 about w-100 pt-4 pt-md-0">
            <div className="row text-center w-100">
              <div className="col-6">
                <p>About Boldin</p>
                <p>Services</p>
                <p>Work with us</p>
              </div>

              <div className="col-6">
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 d-none d-md-block">
            <div className="text-right">
              Hello@boldin.co
              <br />
              +234 812 345 6789
              <br />
              15, Idera Road, Onipan,
              <br />
              Lagos State Nigeria
            </div>
          </div>
        </div>
        <div>
          <p className="socials mt-5 text-center">
            <a
              href="https://twitter.com/boldin_co"
              target="”_blank”"
              className="mr-2"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/boldin"
              target="”_blank”"
              className="mr-2"
            >
              Linkedin
            </a>
            <a href="https://www.instagram.com/boldin_co/" target="”_blank”">
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
