import React from "react";

const Card = ({ id, title, url }) => {
  return (
    <>
      <div className="text-center" style={{ width: "300px" }}>
        <div className="card m-2 ">
          <img src={url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="!#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
