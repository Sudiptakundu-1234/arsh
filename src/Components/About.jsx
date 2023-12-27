import React from "react";

const About = () => {
  return (
    <div>
      <div id="about" className="about ">
        <div className="abouttitle container ">
          <h1>about us</h1>
        </div>
        <div className="about-content container   ">
          <div className="row ">
            <div className=" colom col-lg-6  mt-5 mb-5">
              <h6>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h6>
              <ul>
                <li className="list-unstyled mt-4">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
                <li className="list-unstyled mt-2">
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li className="list-unstyled mt-2">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat
                </li>
              </ul>
            </div>
            <div className=" colom col-lg-6  mt-5 mb-5">
              <h6>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </h6>
              <button className="botn btn  mt-3 ">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
