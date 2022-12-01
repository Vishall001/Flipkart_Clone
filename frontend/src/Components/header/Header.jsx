import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import Search from "./Search";
import MenuIcon from "@mui/icons-material/Menu";
import CustomButton from "./CustomButton";
import { Link } from "react-router-dom";
import { useState } from "react";

const Styledheader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
  marginTop: 3,
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const CustomButtonwrapper = styled(Box)(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
const Header = () => {
  const [open, setOpen] = useState(false);
  const logoURL = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 250 }} onClick={handleClose}>
        <List>
            <listItem button>
                <CustomButton />
            </listItem>
        </List>
    </Box>
);
  return (
    <Styledheader position="fixed">
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton style={{ color: "inherit" }} onClick={handleOpen}>
          <MenuIcon  />
        </MenuButton>
        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <img src={logoURL} alt="Flipkart logo" style={{ width: 75 }} />
          <Box style={{ display: "flex" }}>
            <Subheading>
              Explore&nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Subheading>
            <PlusImage src={subURL} alt="Sub-logo" />
          </Box>
        </Component>
        <Search />
        <CustomButtonwrapper>
          <CustomButton />
        </CustomButtonwrapper>
      </Toolbar>
    </Styledheader>
  );
};

export default Header;
