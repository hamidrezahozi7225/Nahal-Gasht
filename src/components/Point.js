import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Sliders from "./Sliders";

const Point = () => {
  const BootstrapButtonOutLine = styled(Button)({
    width: "max-content",
    marginLeft: "auto",
    marginRight: "auto",
    borderColor: "black",
    color: "black",
    borderRadius: "8px",
  });
  return (
    <div className="container mt-3 pointcontent">
      <div className="content ">
        <div className="row">
          <div className=" col-sm-12 col-md-1">
            <div className="middlePiont">
              <p className="bg-dark text-white rounded-3 ">8.7</p>
              <p className=" text-center">میانگین امتیاز</p>
              <BootstrapButtonOutLine variant="outlined">
                مشاهده نظر
              </BootstrapButtonOutLine>
            </div>
          </div>
          <div className="col-sm-12 col-md">
            <Sliders color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Point;
