import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
const Service = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    const getimages = async () => {
      await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then((value) => setImages(value.data))
        .catch((error) => console.log(error));
    };
    getimages();
  }, []);
  console.log(images);
  return (
    <>
      <div>
        <h1 className="text-center py-5">Our Services</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {images ? (
          images.map((val) => {
            const { id, title, url } = val;
            return <Card key={id} title={title} url={url} />;
          })
        ) : (
          <img
            src="https://cdn-images-1.medium.com/max/1600/0*4Gzjgh9Y7Gu8KEtZ.gif"
            alt="loading"
          />
        )}
      </div>
    </>
  );
};

export default Service;
