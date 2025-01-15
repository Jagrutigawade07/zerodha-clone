import React from "react";

function Hero() {
  return (
    <section className="p-5 mt-5 container-fluid" id="supportHero">
      <div id="supportWrapper" >
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 mx-5">
        <div className="col-6 px-5">
          <h4 >
            Search for an answer or browse help topics to create a ticket
          </h4>
          <br/>
          <input placeholder="Eg. how do I activate F&O" className="mb-3" />
          <br />
          <a href="">Track account opening</a>
          <a href="" className="mx-4 ">Track segment activation</a>
          <a href="" className="mx-4 ">Intraday margins</a>
          <a href="" className="mx-4 ">Kite user manual</a>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;