import React, { useState } from "react";
import FooterComment from "./FooterComment";
import HeaderComment from "./HeaderComment";
import home from "../image/hoteldarvish-home.jpg";
import pool from "../image/pool.jpg";
import labi from "../image/labi.jpg";

const Comments = () => {
  const [count, setCount] = useState(11);
  return (
    <div className="container mt-3 ">
      <div className="content">
        <HeaderComment />
        <div className="d-flex justify-content-center flex-wrap ">
          <img
            src={pool}
            alt="pool"
            width="350px"
            height="150px"
            className="mx-2 mb-2"
          />
          <img
            src={home}
            alt="home"
            width="350px"
            height="150px"
            className="mx-2 mb-2"
          />
          <div className="imageText">
            <img src={labi} alt="labi" width="350px" height="150px" />
            <div className="centered">3 +</div>
          </div>
        </div>
        <FooterComment count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default Comments;
