import React from "react";
import { Box, Button } from "@mui/material";

const LoginButton = () => {
  return (
    <Box
      sx={{
        "& > :not(style)": { m: 0.5, width: "450px", height: "60px" },
        marginTop: "20px",
      }}
    >
      <Button
        variant="contained"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          backgroundColor: "#1B1D1F",
          ":hover": { backgroundColor: "black" },
        }}
      >
        로그인하기
      </Button>
    </Box>
  );
};

export default LoginButton;
