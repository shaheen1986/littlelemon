import React from "react";
import testimonialimg from "../images/photo2.jpg";

const Testimonials = () => {
  return (
    <div>
      <h3 className="testimonialheading">Testimonials</h3>
      <section className="testimonials">
        <div className="testimonialsmain">
          <article className="testimonial">
            <div className="rating">
              Rating
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="profile">
              <img
                src={testimonialimg}
                alt="testimonialimg"
                width="100"
                height="100"
              />
              <p>user profile</p>
            </div>
            <div className="review">reviews</div>
          </article>
          <article className="testimonial">
            <div className="rating">
              Rating
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="profile">
              <img
                src={testimonialimg}
                alt="testimonialimg"
                width="100"
                height="100"
              />
              <p>user profile</p>
            </div>
            <div className="review">reviews</div>
          </article>
          <article className="testimonial">
            <div className="rating">
              Rating
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="profile">
              <img
                src={testimonialimg}
                alt="testimonialimg"
                width="100"
                height="100"
              />
              <p>user profile</p>
            </div>
            <div className="review">reviews</div>
          </article>
          <article className="testimonial">
            <div className="rating">
              Rating
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
              <span>
                <i className="fa fa-star"></i>
              </span>
            </div>
            <div className="profile">
              <img
                src={testimonialimg}
                alt="testimonialimg"
                width="100"
                height="100"
              />
              <p>user profile</p>
            </div>
            <div className="review">reviews</div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
