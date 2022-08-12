import React, { useState } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Sliders from "./Sliders";

const Content = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(true);
  const [state4, setState4] = useState(false);
  const [state5, setState5] = useState(false);
  const [state6, setState6] = useState(false);
  const [state7, setState7] = useState(true);
  const [state8, setState8] = useState(false);

  const BootstrapButtonOutLine = styled(Button)({
    borderColor: "black",
    marginTop: "8px",
    marginLeft: "10px",
    borderRadius: "8px",
    color: "black",
    fontWeight: "bold",
    fontSize: "17px",
    height: "auto",
  });

  return (
    <div className="container  ">
      <div className="content">
        <div className="d-flex px-5 pt-3 pb-2">
          <div className="point d-flex flex-wrap">
            <div className="d-flex align-items-center">
              <h2 className="bg-dark text-white p-2 h-100 ">8.7</h2>
              <div className="px-2">
                <span>امتیاز هتل</span>
                <h5>براساس 25 نظر مسافران</h5>
              </div>
            </div>
            <p className="p-2 ">
              * امتیاز هتل براساس نظرات مسافران ترانر و کاربران پلتفرم که درباره
              هتل نظر ثبت کرده اند محاسبه گردیده است.
            </p>
          </div>
        </div>
        <Sliders color="darkBlue" />
        <div className="px-5 pt-4">
          <h3>فیلتر نظرات براساس</h3>
        </div>
        <div className="d-flex flex-wrap px-5 pt-2 filter">
          <BootstrapButtonOutLine
            variant={!state1 ? "outlined" : "contained"}
            onClick={() => setState1(!state1)}
            style={{
              color: state1 ? "white" : "black",
              backgroundColor: state1 && "darkBlue",
            }}
          >
            امکانات
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state2 ? "outlined" : "contained"}
            onClick={() => setState2(!state2)}
            style={{
              color: state2 ? "white" : "black",
              backgroundColor: state2 && "darkBlue",
            }}
          >
            موقعیت
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state3 ? "outlined" : "contained"}
            onClick={() => setState3(!state3)}
            style={{
              color: state3 ? "white" : "black",
              backgroundColor: state3 && "darkBlue",
            }}
          >
            کارکنان و خدمات
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state4 ? "outlined" : "contained"}
            onClick={() => setState4(!state4)}
            style={{
              color: state4 ? "white" : "black",
              backgroundColor: state4 && "darkBlue",
            }}
          >
            تنوع و کیفیت غذا
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state5 ? "outlined" : "contained"}
            onClick={() => setState5(!state5)}
            style={{
              color: state5 ? "white" : "black",
              backgroundColor: state5 && "darkBlue",
            }}
          >
            وضعیت اتاق و نظافت
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state6 ? "outlined" : "contained"}
            onClick={() => setState6(!state6)}
            style={{
              color: state6 ? "white" : "black",
              backgroundColor: state6 && "darkBlue",
            }}
          >
            قیمت به نسبت کیفیت
          </BootstrapButtonOutLine>
        </div>
        <div className="px-5 pt-2">
          <p>* 14 نظر براساس فیلتر های مورد نظر شما پیدا شد.</p>
        </div>
        <div className="px-5 pt-4">
          <h3>مرتب سازی نظرات براساس</h3>
        </div>
        <div className="d-flex flex-wrap px-5 pt-2 filter pb-2">
          <BootstrapButtonOutLine
            variant={!state7 && state8 ? "outlined" : "contained"}
            onClick={() => setState8(!state8) & setState7(!state7)}
            style={{
              color: state7 ? "white" : "black",
              backgroundColor: state7 && "darkBlue",
            }}
          >
            جدیدترین
          </BootstrapButtonOutLine>
          <BootstrapButtonOutLine
            variant={!state8 ? "outlined" : "contained"}
            onClick={() => setState7(!state7) & setState8(!state8)}
            style={{
              color: state8 ? "white" : "black",
              backgroundColor: state8 && "darkBlue",
            }}
          >
            قدیمی ترین
          </BootstrapButtonOutLine>
        </div>
      </div>
    </div>
  );
};

export default Content;
