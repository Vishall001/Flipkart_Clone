import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items :center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
    color :#2874f0;
    background:#FFF;
    text-transform:none;
    padding : 5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;

`;

const CustomButton = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>

      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>

      <Container>
        <ShoppingCartIcon />

        <Typography>Cart</Typography>
      </Container>
    </Wrapper>
  );
};

export default CustomButton;
