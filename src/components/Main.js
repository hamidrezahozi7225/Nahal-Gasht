import React, { useState } from "react";
import FooterComment from "./FooterComment";
import HeaderComment from "./HeaderComment";

const Main = () => {
  const [count, setCount] = useState(11);
  return (
    <div className="container mt-3 ">
      <div className="content">
        <HeaderComment />
        <FooterComment count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default Main;
