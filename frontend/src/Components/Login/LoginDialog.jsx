import React from "react";
import { Button, Dialog, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "@emotion/styled";
import { useState } from "react";
import { authenticationSignup } from "../../service/api";

const Component = styled(Box)`
  width: 90vh;
  height: 70vh;
  padding: 0;
  padding-top: 0;
`;
const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 40%;
  height: 86%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  overflow: auto;

  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transforn: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOpt = styled(Button)`
  text-transforn: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};
const LoginDialog = ({ open, setOpen }) => {
  const [signup, setSignup] = useState(signupInitialValues);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let res = await authenticationSignup(signup);
  };
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{ marginTop: "20px" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view == "login" ? (
            <Wrapper>
              <TextField variant="standard" label="Enter Email/Mobile number" />
              <TextField variant="standard" label="Enter Password" />
              <Text>
                By continuing, you agree to Flipkart's Terms of Use and Privacy
                Policy.
              </Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>Or</Typography>
              <RequestOpt>Request OTP</RequestOpt>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart? Create an account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Firstname"
                name="firstname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Lastname"
                name="lastname"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Username"
                name="username"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
                name="email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Password"
                name="password"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone"
                name="phone"
              />
              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
