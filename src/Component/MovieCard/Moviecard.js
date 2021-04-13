import React, { useState } from "react";

const Moviecard = ({ Addfilm }) => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [posterUrle, setposterUrle] = useState("");
  const [Rate, setRate] = useState(0);
  const handelSubmit = (e) => {
    e.preventDefault();
    Addfilm(title, description, posterUrle, Rate);
    settitle("");
    setdescription("");
    setposterUrle("");
    setRate(0);
  };

  return (
    <form onSubmit={handelSubmit} className="movicard">
      <input
        className="inpu"
        type="text"
        placeholder="Title ..."
        value={title}
        onChange={(e) => settitle(e.target.value)}
      ></input>
      <p></p>
      <input
        className="inpu"
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></input>
      <p></p>
      <input
        className="inpu"
        type="text"
        placeholder="Put your url here..."
        value={posterUrle}
        onChange={(e) => setposterUrle(e.target.value)}
      ></input>
      <p></p>
      <input
        className="inpu"
        type="text"
        placeholder="Rate your film..."
        value={Rate}
        onChange={(e) => setRate(e.target.value)}
      ></input>
      <p></p>
      <button className="btnadd" onClick={() => Addfilm}>
        add
      </button>
    </form>
  );
};

export default Moviecard;
