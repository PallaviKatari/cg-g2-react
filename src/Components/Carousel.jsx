import React from "react";
import logo from "../Assets/react.png";

export default function Carousel() {
  return (
    <div className="container-fluid" style={{marginTop:100}}>
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img src={logo} alt="HTML" />
            <h3>HTML</h3>

            <p>Hypertext Markup Language</p>
          </div>

          <div className="item">
            <img src={logo} alt="CSS" />
            <h3>CSS</h3>
            <p>Cascading Style Sheet</p>
          </div>

          <div className="item">
            <img src={logo} alt="JS" />
            <h3>JS</h3>

            <p>Javascript</p>
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}
