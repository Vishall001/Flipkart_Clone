import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
`;
const Image = styled("img")({
  padding: "15px",
});
const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;
const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="ProductImage" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <ShoppingCartIcon /> Add to Cart
      </StyledButton>
      <StyledButton variant="contained" style={{ background: "#fb541b" }}>
        <FlashOnIcon /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
