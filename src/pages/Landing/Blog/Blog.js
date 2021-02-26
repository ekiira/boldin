import "./blog.scss";

import rocket from "../../../assets/images/rocket.png";

function Blog() {
  return (
    <div className="blog py-5">
      <div className="container py-5">
        <div className="row pb-4">
          <div className="col-12 col-lg-6">
            <p className="blog-title">Our Blog</p>
            <p className="blog-text">
              We put down our <br /> thoughts in hopes of it <br /> changing the
              world
            </p>
          </div>
          <div className="col-12 col-lg-6 pt-4 pt-lg-0">
            <div className="posts">
              <p>Have a bold idea you want to build?</p>
              <p>Building great products: The right process to follow</p>
              <p>
                The Nigeria Development Space Dealing with Mental Health Issues
              </p>
            </div>

            <div>
              <p className="view-more">View more</p>
            </div>
          </div>
        </div>
        <div className="py-5">
          <p className="blog-title">Subscribe to our Newsletter</p>
          <div className="row ">
            <div className="col-12 col-lg-6">
              <p className="blog-text">
                Stay updated on our <br />
                latest news, blog posts <br /> and promotions
              </p>
            </div>
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">
              <div className="input">
                <input
                  className="form-control sub-input"
                  placeholder="Enter Your Adress Email"
                />
                <div className="mt-4">
                  <button className="btn sub">
                    Subscribe
                    <img src={rocket} alt="rocket" className="ml-3 img-fluid" />
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
