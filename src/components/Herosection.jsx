import React from "react";
import photo1 from "../images/photo1.jpg";

const Herosection = () => {
  return (
    <div>
      <section className="sec_one">
        <div className="outframe">
          <article>
            <div className="main">
              <h3 className="title">Little Lemon</h3>
              <h5 className="location">Chicago</h5>
              <p className="description">
                we are family owned Mediterranean restaurant. focused on
                traditional recipes served with a modern twist
              </p>
              <button className="reserveTable">ReserveTable</button>
            </div>
          </article>
          <div className="image">
            <img src={photo1} alt="outframe" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Herosection;
