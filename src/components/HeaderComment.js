import React from "react";
import avatar from "../image/hamidhozi.jpg";

const HeaderComment = () => {
  return (
    <>
      <div className="d-flex justify-content-between p-3">
        <div className="d-flex">
          <img
            src={avatar}
            alt="avatar"
            className="border border-dark rounded rounded-circle"
            width="60px"
          />
          <div className="mx-2">
            <h4>حمیدحوضی</h4>
            <span>ثبت نظر در 12 آذر 1400</span>
          </div>
        </div>
        <div>
          <h5 className="p-2">
            سه شب <spn>اقامت در</spn> در آذر 1400 اتاق سه تخته امپریال
          </h5>
        </div>
      </div>
      <div className="px-3">
        <p style={{ fontSize: "20px" }}>
          جالب اینکه با تاریکی شب و روشن شدن چراغ های پل طبیعت،زیبایی آن دوچندان
          می شود.جذاببیت این مناظر تا حدی است که بسیاری از بازدیدکنندگان فرصت
          ثبت این لحظه ها و گرفتن عکس های یادگاری و سلفی را ازدست نمیدهند. وجود
          رستوران ها و کافه های مختلف روی این پل نیز فرصت مناسبی به شما میدهد تا
          در کنار تفریح، غذای خوشمزه ای نوش جان کنید
        </p>
      </div>
    </>
  );
};

export default HeaderComment;
