import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";

export const ResponsiveServiceDropDown = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onClickForSale = () => {
    navigate("/services");
    setAnchorEl(null);
  };
  const onClickDeposit = () => {
    navigate("/deposit");
    setAnchorEl(null);
  };
  const onClickBackUp = () => {
    navigate("/backup");
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
          fontFamily: "Roboto",
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "36px",
          color: "black",
        }}
      >
        apply for service
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
        <ColorMenuItem onClick={onClickForSale}>分譲</ColorMenuItem>
        <ColorMenuItem onClick={onClickDeposit}>寄託</ColorMenuItem>
        <ColorMenuItem onClick={onClickBackUp}>バックアップ</ColorMenuItem>
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
