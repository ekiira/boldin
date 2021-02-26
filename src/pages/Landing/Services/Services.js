import "./services.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { services } from "../../../utils/services";
import serviceH from ".././../../assets/images/servicesH.png";
import serviceF from ".././../../assets/images/servicesB.png";

function Services() {
  return (
    <div className="services py-5" id="services">
      <div className="container py-5">
        <div className="row pb-5">
          <div className="col-md-7" data-aos="fade-right">
            <p className="title">Our Services</p>
            <p className="text">
              Excellently built products that perform at scale{" "}
              <span>read more</span>
            </p>
          </div>
        </div>
        <div>
          <Splide
            options={{
              perPage: 3,
              perMove: 1,
              gap: "1.5rem",
              padding: {
                left: 0,
                right: "6rem",
              },
              pagination: false,
              arrowPath:
                "M0.333252 13.1666L35.3683 13.1666L29.7783 18.7783L32.8333 21.8333L43.6666 11L32.8333 0.166626L29.7783 3.22163L35.3683 8.83329L0.333252 8.83329L0.333252 13.1666Z",
              breakpoints: {
                767: {
                  perPage: 1,
                },
                1023: {
                  perPage: 2,
                },
              },
            }}
          >
            {services.map(({ serviceOne, serviceTwo, image }, index) => (
              <SplideSlide key={index}>
                <div className="service-slide">
                  <span className="head">
                    <img src={serviceH} alt="service-header-icon" />
                  </span>
                  <span className="foot">
                    <img src={serviceF} alt="service-footer-icon" />
                  </span>
                  <div className="d-flex align-items-center h-100 px-4">
                    <div>
                      <img src={image} alt="service-icon" />
                      <p className="service-title mt-5" data-aos="fade-right">
                        {serviceOne} <br /> {serviceTwo}
                      </p>
                    </div>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
}

export default Services;
