import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ResponsiveServiceDropDown } from "./responsiveServiceServiceDropDown";

export const HeaderDropDown = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickDrTanaka = () => {
    window.open("http://dbs.nodai.ac.jp/html/270_ja.html", "_blank");
  };
  const [nowLanguage, setNowLanguage] = useState("English");
  const onClickLanguage = () => {
    nowLanguage === "日本語"
      ? setNowLanguage("English")
      : setNowLanguage("日本語");
  };

  return (
    <>
      <ColorButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontFamily: "Inter",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "24px",
          lineHeight: "29px",
          color: "black",
        }}
      >
        <MenuIcon sx={{ width: 40, height: 40 }} />
      </ColorButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <ResponsiveServiceDropDown />
        <ColorMenuItem onClick={props.onClickContact}>
          お問い合わせ
        </ColorMenuItem>
        <ColorMenuItem onClick={onClickDrTanaka}>センター長紹介</ColorMenuItem>
        <ColorMenuItem onClick={onClickLanguage}>日本語/英語</ColorMenuItem>
      </Menu>
    </>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  "&:hover": {
    color: "#33cc99",
    backgroundColor: "#ffff",
  },
}));

const ColorMenuItem = styled(MenuItem)(({ theme }) => ({
  "&:hover": {
    color: "#33cc99",
    backgroundColor: "#ffff",
  },
}));
