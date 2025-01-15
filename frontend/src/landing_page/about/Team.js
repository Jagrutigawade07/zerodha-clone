import React from "react";

function Team() {
  return (
    <div className="container px-5 ">
      <div
        className="row px-3 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em"}}
      >
        <div className="col-5 mx-5 my-5 text-center mt-5"  >
          <img
            src="images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%"}}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3 " style={{ lineHeight: "25px"}} >
        <h2 className="mb-5">People</h2>
<br/>
          <p style={{ fontSize: "18px" }}>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p style={{ fontSize: "18px" }}>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p style={{ fontSize: "18px" }}>Playing basketball is his zen.</p>
          <p style={{ fontSize: "18px" }}>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;