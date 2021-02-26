import "./contact.scss";

import rocket from "../../../assets/images/rocket.png";

function Contact() {
  return (
    <div className="contact py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-lg-7 col-12">
            <div className='d-flex align-items-center h-100'>
            <div>
            <p className='contact-title'>Work with us</p>
              <p className='contact-text'>
                Do you Have a bold idea you want to build? Talk to us about it.
                Let’s help you power it.
              </p>
              <div className='pt-3'>
                    <button className="btn talk-btn">
                    Let’s talk
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
      </div>
    </div>
  );
}

export default Contact;
