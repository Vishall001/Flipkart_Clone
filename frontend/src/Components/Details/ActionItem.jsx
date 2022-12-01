import { Box, Button, styled } from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  marginRight: "40px",
  [theme.breakpoints.down("lg")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")({
  padding: "15px 20px",
  border: "1px solid #f0f0f0",
  width: "95%",
});

const StyledButton = styled(Button)(({ theme }) => ({
  width: "48%",
  borderRadius: "2px",
  height: "50px",
  color: "#fff",
  [theme.breakpoints.down("lg")]: {
    width: "46%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "48%",
  },
}));
const ActionItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const addItemsToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="ProductImage" />
      </Box>
      <StyledButton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => addItemsToCart()}
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
