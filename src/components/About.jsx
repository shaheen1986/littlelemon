import React from "react";
import photo3 from "../images/photo3.jpg";
import photo1 from "../images/photo1.jpg";

const About = () => {
  return (
    <div>
      <section className="sec_one">
        <div className="outframe aboutmain">
          <article>
            <div className="main">
              <h3 className="title abouttitle">Little Lemon</h3>
              <h5 className="location aboutlocation">Chicago</h5>
              <p className="description aboutdescription">
                we are family owned Mediterranean restaurant. focused on
                traditional recipes served with a modern twist
              </p>
              <button className="reserveTable">ReserveTable</button>
            </div>
          </article>
          <div className="image">
            <img src={photo1} alt="outframe" />
          </div>
          <div className="aboutimage">
            <img src={photo3} alt="outframe" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
