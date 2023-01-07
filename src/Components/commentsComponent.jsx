import React, { Component, useEffect } from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useSearchParams } from "react-router-dom";

function Coments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };
  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="col-sm mt-5 ">
      {comments.map((text) => (
        <div>{text}</div>
      ))}
      <div>
        <h3>Comment</h3>
        <input onChange={onChangeHandler} />
        <button onClick={onClickHandler}>Add Comment</button>
      </div>
    </div>
  );
}

export default Coments;
