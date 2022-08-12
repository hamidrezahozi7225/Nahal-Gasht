import React, { useState } from "react";
import FooterComment from "./FooterComment";
import HeaderComment from "./HeaderComment";
import home from "../image/hoteldarvish-home.jpg";
import pool from "../image/pool.jpg";
import labi from "../image/labi.jpg";

const Comments3 = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mt-3 ">
      <div className="content">
        <HeaderComment />
        <div className="d-flex justify-content-center flex-wrap ">
          <img
            src={pool}
            alt="pool"
            width="90%"
            height="150px"
            className="mx-2 mb-2"
          />
        </div>
        <FooterComment count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default Comments3;
