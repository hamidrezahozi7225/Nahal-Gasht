import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";

const ButtonDetail = () => {
  const BootstrapButtonContained = styled(Button)({
    width: "max-content",
    borderColor: "white",
    backgroundColor: "black",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    padding: "8px",
  });
  return (
    <div className="mt-3 text-center mb-3">
      <BootstrapButtonContained variant="contained">
        نمایش 250 نظر دیگر
      </BootstrapButtonContained>
    </div>
  );
};

export default ButtonDetail;
