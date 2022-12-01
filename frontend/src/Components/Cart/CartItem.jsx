import { Box, Typography, styled, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { removedFromCart } from "../../redux/actions/cartActions";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";
const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background:#fff
`;

const LeftComponent = styled(Box)`
  margin: 20px;
  display:flex;
  flex-direction :column;
`;

const SellerText = styled(Box)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const Remove = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

const CartItem = ({ item }) => {
  const dispatch =useDispatch()
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const removeItemfromCart =(id)=>{
        dispatch(removedFromCart(id))
    }
  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="Product" style={{ heigth: 110, width: 110 }} />
        <GroupedButton />
      </LeftComponent>
      <Box style={{ margin: "20px" }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SellerText>
          Seller:RetailNet{" "}
          <Box component="span">
            <img
              src={fassured}
              alt="Flipkart assured"
              style={{ width: 50, marginLeft: "10px" }}
            />
          </Box>
        </SellerText>
        <Typography style={{ margin: "20px 0" }}>
          <span style={{ fontWeight: 600, fontSize: "18px" }}>
            ₹{item.price.cost}
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span style={{ color: "#388E3C" }}>{item.price.discount} off</span>
        </Typography>
        <Remove onClick={()=>removeItemfromCart(item.id)}>Remove</Remove>
      </Box>
    </Component>
  );
};

export default CartItem;
