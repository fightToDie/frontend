import React from "react";
import { Box, Button } from "@mui/material";

const SignUpButton = () => {
  const signUpURL = "https://www.spotify.com/us/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2F";

  return (
    <Box
      sx={{
        "& > :not(style)": { width: "250px", height: "60px" },
      }}
    >
      <Button
        variant="contained"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          color: "black",
          backgroundColor: "#1ED760",
          ":hover": { backgroundColor: "#1ABA53" },
          borderRadius: "30px",
          borderStyle: "none",
        }}
        onClick={() => {
          window.open(signUpURL);
        }}

      >
        Spotify에 가입하기
      </Button>
    </Box>
  );
};

export default SignUpButton;
