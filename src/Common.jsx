import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";
const Common = ({ img, btnname, visit }) => {
  return (
    <>
      <section
        id="header"
        className="d-flex justify-content-center align-items-center pt-5 vh-100"
      >
        <div className="container-fluid nav_bg">
          <div className="row justify-content-center align-items-center text-center ">
            <div className="col-10 mx-auto">
              <div className="row  justify-content-center align-items-center">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center text-center align-items-center">
                  <h1 className="pt-5">
                    Company Grow Your Business With
                    <strong className="active">Rajat</strong>.
                  </h1>
                  <h2 className="my-3">Talented Developer</h2>
                  <div className="mt-3">
                    <NavLink
                      to={visit}
                      className="btn btn-outline-primary rounded-circle p-2 font-weight-bold "
                      style={{ fontSize: "20px" }}
                    >
                      {btnname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 justify-content-center align-items-center text-center">
                  <img
                    src={img}
                    className="anim"
                    style={{ width: "550px", borderRadius: "20px" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
