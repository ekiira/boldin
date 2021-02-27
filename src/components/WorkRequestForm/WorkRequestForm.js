import "./style.scss";

import Form from "react-bootstrap/Form";

import rocket from "../../assets/images/rocket.png";
import logo from "../../assets/images/logo-w.svg";
import close from "../../assets/images/close.svg";
import emoji from "../../assets/images/🤩.png";

function WorkRequest({ setOpenRequestForm, setCheckNavMenu }) {
  return (
    <div className="workRequest">
      <div className="container-fluid">
        <div className="head py-4 d-flex justify-content-between w-100">
          <div>
            <button className="btn">
              <img src={logo} alt="logo" />
            </button>
          </div>
          <div>
            <button
              className="btn"
              onClick={() => {
                setOpenRequestForm(false);
                setCheckNavMenu(false);
              }}
            >
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
        <div className="py-4">
          <div>
            <p className="hello">
              Hello,{" "}
              <span>
                <img src={emoji} alt="emoji" className="img-fluid" />
              </span>
            </p>
            <p className="email-text">
              Complete the form or email{" "}
              <a href="hello@boldin.co" className="email">
                hello@boldin.co
              </a>
              <img src={rocket} alt="rocket" className="header img-fluid" />
            </p>
            <div className="row">
              <div className="col-md-9">
                <Form>
                  <div className="row pb-1 pb-md-3">
                    <div className="col-md-6">
                      <Form.Group controlId="requestName">
                        <Form.Label className="request-label">
                          Full Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g Jane Doe "
                          className="request-input"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group controlId="requestCompanyName">
                        <Form.Label className="request-label">
                          Company Name
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Your Company Name here"
                          className="request-input"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row py-1 py-md-4">
                    <div className="col-md-6">
                      <Form.Group controlId="requestNumber">
                        <Form.Label className="request-label">
                          Phone Number
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="e.g +2348123456789"
                          className="request-input"
                        />
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group controlId="requestEmail">
                        <Form.Label className="request-label">
                          Email Address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="e.g me@example.com"
                          className="request-input"
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row pt-1 pt-md-3">
                    <div className="col-12">
                      <Form.Group controlId="requestDesc">
                        <Form.Label className="request-label">
                          Please tell us a little more about your project*
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          placeholder="Type here"
                          rows={2}
                          className="request-input"
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div className="pt-3 pt-mb-4">
                    <button className="btn send-btn">
                      Send Request
                      <img
                        src={rocket}
                        alt="rocket"
                        className="ml-3 img-fluid rocket"
                      />
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkRequest;
