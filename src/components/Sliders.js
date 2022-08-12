import React from "react";
import Slider from "@mui/material/Slider";
import { withStyles } from "@mui/styles";

const Sliders = ({ color }) => {
  const CustomSlider = withStyles({
    root: {
      color: color,
      height: 3,
      padding: "13px 0",
    },
    track: {
      height: 4,
      borderRadius: "5px",
    },
    thumb: {
      height: 12,
      width: 12,
      backgroundColor: color,
      border: "1px solid currentColor",
      boxShadow: "#ebebeb 0 2px 2px",
      borderRadius: "3px",
      "&:focus, &:hover, &$active": {
        boxShadow: "none",
      },
      color: color,
    },
  })(Slider);
  return (
    <div className="row slider px-5 pt-3">
      <div className="col-sm-12 col-md slider-Rate">
        <div>
          <h5>امکانات</h5>
          <div className="d-flex">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
        <div className="mt-2">
          <h5>موقعیت هتل</h5>
          <div className="d-flex ">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
        <div className="mt-2">
          <h5>کارکنان و خدمات</h5>
          <div className="d-flex ">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md slider-Rate">
        <div>
          <h5>تنوع و کیفیت غذا</h5>
          <div className="d-flex ">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
        <div className="mt-2">
          <h5>وضعیت اتاق و نظافت</h5>
          <div className="d-flex ">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
        <div className="mt-2">
          <h5>قیمت به نسبت کیفیت</h5>
          <div className="d-flex ">
            <CustomSlider value={25} step={20} track="inverted" />
            <span className="mx-2">7.5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
