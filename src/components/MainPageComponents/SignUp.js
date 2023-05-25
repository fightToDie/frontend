import React from "react";
import { Box } from "@mui/material";

const SignUp = () => {
  const signUpURL = "https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F";
  return (
    <>
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
        }}
        onClick={() => {
          window.open(signUpURL);
        }}
      >
        Sign up
      </Box>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </>
  );
};

export default SignUp;
