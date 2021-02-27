import "./home.scss";

import spaceman from "../../../assets/images/spaceman (1).svg";
import rocket from "../../../assets/images/rocket.png";
import scroll from "../../../assets/images/scroll.svg";

function Home({ checkNavMenu }) {
  return (
    <div
      className={`home d-flex align-items-center pb-5 pb-md-1
     ${checkNavMenu === true ? `slide-left` : `slide-right`} 

     `}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 py-4 py-lg-0 w-100">
            <div className="d-flex align-items-center h-100 justify-content-center w-100">
              <div>
                <div className="intro">
                  <p>
                    Innovators with
                    <br /> <span className="font-weight-bold">bold ideas</span>
                  </p>
                </div>
                <div className="sub-intro">
                  <p className="mb-4">
                    We power bold innovations for individuals and business
                  </p>
                  <div className="mt-3">
                    <button className="btn get-strtd">
                      Get Started
                      <img
                        src={rocket}
                        alt="rocket"
                        className="ml-3 img-fluid rocket"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12 space text-center py-5 py-lg-0">
            <img
              src={spaceman}
              alt="space-man"
              className="img-fluid space-man"
            />
          </div>
        </div>
        <div className="scroll text-center mt-2 mt-lg-5">
          <a href="#services">
            <img src={scroll} alt="scroll-icon" />
            <br />
            <span>Scroll down</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
