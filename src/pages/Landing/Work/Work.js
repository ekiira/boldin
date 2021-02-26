import "./work.scss";

import work from "../../../assets/images/work.png";
import rocket from "../../../assets/images/rocket.png";

function Work() {
  return (
    <div className="work py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-7">
            <div className="pb-5">
              <p className="work-title">Our Work</p>
              <p className="work-text">
                We have empowered bold ideas and products in various markets see
                more
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-7 py-3 py-lg-0">
            <div className="d-flex h-100 align-items-center">
              <div>
                <p className="work-title">Boldin</p>
                <p className="work-text">
                  Nigeria Super Innovator improving Software Development
                  Globally
                </p>
                <p className="sub-text">Web design & Development</p>
                <div className="pt-3">
                  <button className="btn view-btn">
                    View Case Study
                    <img src={rocket} alt="rocket" className="ml-3 img-fluid" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 py-3 py-lg-0">
            <img src={work} alt="mask-group" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
