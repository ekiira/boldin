import "./blog.scss";

import rocket from "../../../assets/images/rocket.png";

function Blog() {
  return (
    <div className="blog py-5">
      <div className="container py-5">
        <div className="py-2">
          <p className="blog-title" data-aos="fade-right">Subscribe to our Newsletter</p>
          <div className="row ">
            <div className="col-12 col-md-6" data-aos="fade-right">
              <p className="blog-text">
                Stay updated on our <br />
                latest news, blog posts <br /> and promotions
              </p>
            </div>
            <div className="col-12 col-md-6 pt-4 pt-lg-0" data-aos="zoom-in-left">
              <div className="input">
                <input
                  className="form-control sub-input"
                  placeholder="Enter Your Adress Email"
                />
                <div className="mt-4">
                  <button className="btn sub">
                    Subscribe
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

export default Blog;
