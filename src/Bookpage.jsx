import React from "react";
import "./App.css";

const Bookpage = ({
  title,
  author,
  image,
  ratings,
  description,
  handleEvent,
}) => {
  return (
    <>
      <div className="card">
        <img
          src={image}
          alt="image"
          className="card-img"
          onClick={() => alert(`You added ${title} to your cart`)}
        />
        <h2 className="book-title">{title}</h2>
        <div className="flex">
          <h3 className="book-author">{author}</h3>
          <h5 className="book-ratings">{ratings}</h5>
        </div>

        <p className="book-par">{description.substring(0, 120)}</p>
      </div>
    </>
  );
};

export default Bookpage;
