import React from "react";
import { AppBar, Toolbar, styled, Typography, Box } from "@mui/material";
import Search from "./Search";
import CustomButton from "./CustomButton";

const Styledheader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 12%;
  line-height: 0;
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

const CustomButtonwrapper =styled(Box)`
   margin: 0 5% 0 auto
`
const Header = () => {
  const logoURL = `https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <Styledheader>
      <Toolbar style={{ minHeight: 55 }}>
        <Component>
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

        <CustomButton/>
        </CustomButtonwrapper>
      </Toolbar>
    </Styledheader>
  );
};

export default Header;
