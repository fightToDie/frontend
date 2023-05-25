import React from "react";
import { Container, Grid } from "@mui/material";

import LoginTitle from "../../components/LoginPageComponents/LoginTitle";
import EmailInput from "../../components/LoginPageComponents/EmailInput";
import PasswordInput from "../../components/LoginPageComponents/PasswordInput";
import LoginButton from "../../components/LoginPageComponents/LoginButton";
import FindingPassword from "../../components/LoginPageComponents/FindingPassword";
import SignUpText from "../../components/LoginPageComponents/SignUpText";
import SignUpButton from "../../components/LoginPageComponents/SignUpButton";

const LoginPage = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          paddingTop: "90px",
        }}
      >
        <LoginTitle />
        <EmailInput />
        <PasswordInput />
        <LoginButton />
        <FindingPassword />
        <SignUpText />
        <SignUpButton />
      </Grid>
    </Container>
  );
};

export default LoginPage;
