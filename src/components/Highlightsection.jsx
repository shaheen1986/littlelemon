import React from "react";
import prdone from "../images/photo1.jpg";

const Highlightsection = () => {
  return (
    <div>
      <div className="container">
        <div className="product">
          <div className="product_img">
            <img src={prdone} alt="prdone" />
          </div>
          <div className="product_title">
            <div className="title_name">Greeksalad</div>
            <div className="title_price">$18</div>
          </div>
          <div className="product_description">
            the famous greek salad of crispy letuce,pepper,olives and our
            chicago style feta chese,garnished with crunchy garlic and rosemary
            croutons.
          </div>
          <div className="order_tab">
            <h3>order a delivery</h3>
            <span>
              <i className="fa fa-bicycle"></i>
            </span>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={prdone} alt="prdone" />
          </div>
          <div className="product_title">
            <div className="title_name">Greeksalad</div>
            <div className="title_price">$18</div>
          </div>
          <div className="product_description">
            the famous greek salad of crispy letuce,pepper,olives and our
            chicago style feta chese,garnished with crunchy garlic and rosemary
            croutons.
          </div>
          <div className="order_tab">
            <h3>order a delivery</h3>
            <span>
              <i className="fa fa-bicycle"></i>
            </span>
          </div>
        </div>
        <div className="product">
          <div className="product_img">
            <img src={prdone} alt="prdone" />
          </div>
          <div className="product_title">
            <div className="title_name">Greeksalad</div>
            <div className="title_price">$18</div>
          </div>
          <div className="product_description">
            the famous greek salad of crispy letuce,pepper,olives and our
            chicago style feta chese,garnished with crunchy garlic and rosemary
            croutons.
          </div>
          <div className="order_tab">
            <h3>order a delivery</h3>
            <span>
              <i className="fa fa-bicycle"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlightsection;
