import { Grid, Typography, Box ,styled, Button} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalBalance from "./TotalBalance";


const Container =styled(Grid)`
    padding: 30px 135px
`
const Header =styled(Box)`
      padding:15px 24px;
      background:#fff;
`
const ButtonWrapper =styled(Box)`
       padding:16px 22px;
       background:#fff;
       box-shadow: 0 -2px 10px 0 rgb(0 0 0/10%);
       border-top: 1px solid #f0f0f0
`

const StyledButton =styled(Button)`
      display :flex;
      margin-left:auto;
      background:#fb641b;
      color: #fff;
      width:250px;
      height:51px;
      border-radius:2px
`
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.length > 0 ? (
        <Container container>
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => {
              return <CartItem item={item} />;
            })}
            <ButtonWrapper>
                <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
            
          </Grid>

          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance />
          </Grid>
        </Container>
      ) : (
        <div>Empty</div>
      )}
    </>
  );
};

export default Cart;
