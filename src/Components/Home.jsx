import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div style={{ textAlign: "center", padding: "20px" }}>
        <div>
          <h1>Better Solutions For Your Business</h1>
          <h4>
            We are a team of talented designers making websites with Bootstrap
          </h4>
          <span className="d-flex mt-5">
            <button style={{ padding: "10px", marginRight: "10px" }}>
              get started
            </button>
            <Link className="d-flex text-white text-decoration-none align-items-center">
              <i></i>
              watch video
            </Link>
          </span>
        </div>

        <div className="mypartners container-fluid d-flex align-items-center justify-content-center pt-3 pb-3">
          <div className="partners row container">
            {/* Your existing code for partners goes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
