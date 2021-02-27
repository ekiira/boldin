import logo from "../../assets/images/logo.png";

import "./footer.scss";
function Footer() {
  return (
    <div className="footer pb-1 px-3">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12 col-lg-3 logo text-center pb-3 pb-lg-0">
            <div>
              <img src={logo} alt="brand-logo" />
            </div>
          </div>
          <div className="col-md-12 col-lg-6 about w-100 pt-4 pt-md-0 pb-3 pb-lg-0">
            <div className="row text-center w-100">
              <div className="col-6 col-lg-4">
                <p>Work with us</p>
                <p>About Boldin</p>
                <p>Services</p>
              </div>

              <div className="col-6 col-lg-4">
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Cookies Policy</p>
              </div>
              <div className="col-4 d-none d-lg-block">
                <p>Linkedin</p>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-3">
            <div className="text-center">
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
          <p className="socials mb-5 text-center d-flex justify-content-between d-lg-none">
            <a
              href="https://twitter.com/boldin_co"
              target="”_blank”"
              className="mr-1"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/boldin"
              target="”_blank”"
              className="mr-1"
            >
              Linkedin
            </a>
            <a href="https://www.instagram.com/boldin_co/" target="”_blank”">
              Instagram
            </a>
          </p>
        </div>
        <div>
          <p className="text-center">© 2021 Boldin Technology Solutions</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
