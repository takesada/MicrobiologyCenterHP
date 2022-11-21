import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

export const IntroductionDropDown = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickTanaka = () => {
    window.open("http://dbs.nodai.ac.jp/html/270_ja.html", "_blank");
    setAnchorEl(null);
  };
  const onClickKurokawa = () => {
    setAnchorEl(null);
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
          fontSize: { lg: "24px", md: "16px" },
          lineHeight: "29px",
          color: "black",
        }}
      >
        スタッフ紹介
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
        <ColorMenuItem onClick={onClickTanaka}>田中尚人</ColorMenuItem>
        <ColorMenuItem onClick={onClickKurokawa}>黒川祐菜</ColorMenuItem>
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
