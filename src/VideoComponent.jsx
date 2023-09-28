import React from "react";
import "./VideoComponent.css";
import { Slide, Zoom } from "react-awesome-reveal";
import img1feat from './Images/3644592.png';
import img2feat from './Images/3669692.png';
import img3feat from './Images/20945490.png';


function VideoComponent() {

  return (
    <div className="container-fluid video1 ">
      <div className="container text-center pt-4 card1" >
        <Slide direction="up" >
          <div className="myelementSec">
            <h1>"Seamless Mobility"</h1>
          </div>
        </Slide>
        {/* <Slide direction="up" triggerOnce={true}> */}
        <div class="row align-items-center subcard1 pt-4">
          <div class="col subcard11">
            <img
            className="imgfeat"
              src={img1feat}
              alt="Image Description"
              class="imgsize"
            />
            <h5 className="nameContent">Convenience and Accessibility</h5>
          </div>
          <div class="col subcard12">
            <img
            className="imgfeat"
              src={img2feat}
              alt="Image Description"
              class="imgsize"
            />{" "}
            <h5 className="nameContent">Safety and Transparency</h5>
          </div>
          <div class="col subcard13">
            <img
            className="imgfeat"
              src={img3feat}
              alt="Image Description"
              class="imgsize"
            />
            <h5 className="nameContent">Affordability and Pricing {/*<br/> Transparency*/}</h5>
          </div>
        </div>
        </div>
        <hr />
</div>
  );
  }
  export default VideoComponent;