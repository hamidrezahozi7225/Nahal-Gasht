import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import nama from "../image/hoteldarvish-nama.jpeg";
import labi from "../image/hoteldarvish-labi.jpg";
import cafe from "../image/hoteldarvish-cafe.jpeg";
import home from "../image/hoteldarvish-home.jpg";
import resturant from "../image/hoteldarvish-resturant.jpeg";
import Icon from "@mui/material/Icon";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { loadCSS } from "fg-loadcss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const Header = () => {
  const value = 5;
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      document.querySelector("#font-awesome-css") || document.head.firstChild
    );
    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  const BootstrapButtonContained = styled(Button)({
    width: "100%",
    borderColor: "black",
    backgroundColor: "darkblue",
    borderRadius: "8px",
  });
  const BootstrapButtonOutLine = styled(Button)({
    width: "100%",
    borderColor: "black",
    color: "black",
    borderRadius: "8px",
    marginBottom: "7px",
  });

  return (
    <div
      className="d-flex justify-content-center flex-wrap container "
      style={{ width: "100%" }}
    >
      <div className="title mx-3">
        <div className="titleHeader">
          <Stack spacing={2}>
            <Breadcrumbs separator=">" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <span style={{ paddingRight: "50px" }}>مشهد</span>
          <h4>نظرات هتل درویشی مشهد</h4>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="text-feedback"
              value={value}
              readOnly
              precision={0.5}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            <Box sx={{ ml: 2 }}>{labels[value]}</Box>
          </Box>
          <h5 className=" mt-2">آدرس:</h5>
          <p className="pb-2">مشهد - خیابان امام رضا - بین امام رضا 24 و 26</p>
        </div>
        <div className="mt-3 w-100">
          <BootstrapButtonContained variant="contained" disableRipple>
            <span>رزرو هتل درویشی مشهد > </span>
          </BootstrapButtonContained>
        </div>
        <div className="mt-2 w-100">
          <BootstrapButtonOutLine variant="outlined" disableRipple>
            <span>رزرو سایر هتل های مشهد > </span>
          </BootstrapButtonOutLine>
        </div>
      </div>
      <div>
        <ImageList variant="quilted" cols={7} rowHeight={160}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
  </Link>,
  <Link underline="hover" key="1" color="inherit" href="/">
    هتل ها
  </Link>,
  <Link
    underline="hover"
    key="2"
    color="inherit"
    href="/material-ui/getting-started/installation/"
  >
    هتل های مشهد
  </Link>,
  <Typography key="3" color="text.primary">
    هتل مجلل درویشی
  </Typography>,
];

const labels = {
  1: "یک ستاره",
  2: "دو ستاره",
  3: "سه ستاره",
  4: "چهار ستاره",
  5: "پنج ستاره",
};

const itemData = [
  {
    img: nama,
    title: "Nama",
    rows: 2,
    cols: 3,
  },
  {
    img: labi,
    title: "Labi",
    cols: 2,
  },
  {
    img: cafe,
    title: "Caffee",
    cols: 2,
  },

  {
    img: home,
    title: "Home",
    cols: 2,
  },
  {
    img: resturant,
    title: "Resturan",
    cols: 2,
  },
];

export default Header;
