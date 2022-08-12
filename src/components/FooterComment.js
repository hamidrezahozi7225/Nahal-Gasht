import React, { useState } from "react";
import liked from "../image/like-svgrepo-com.svg";
import unlike from "../image/like-svgrepo-com (1).svg";
import arrow from "../image/right-arrow-4843.svg";

const FooterComment = ({ count, setCount }) => {
  const [like, setLike] = useState(false);

  const handleClick = () => {
    setLike(!like);
    if (like) {
      setCount((prevcount) => prevcount - 1);
    } else {
      setCount((prevcount) => prevcount + 1);
    }
  };
  return (
    <div className="d-flex justify-content-between p-3 mt-4">
      <div>
        <div>
          <span className="px-1">{count}</span>
          <img
            src={like ? liked : unlike}
            alt="like"
            width="30px"
            onClick={handleClick}
          />
        </div>
        <span>مفید بود</span>
      </div>
      <div className="mt-3">
        <span className="bg-dark text-white p-2 mx-1 rounded-2">8.7</span>
        <span>
          میانگین امتیاز <img src={arrow} alt="arrow" width="20px" />
        </span>
      </div>
    </div>
  );
};

export default FooterComment;
