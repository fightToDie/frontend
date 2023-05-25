import React from "react";
import { Box, OutlinedInput } from "@mui/material";

const PasswordInput = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0.5, width: "450px" },
        marginTop: "10px",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          fontWeight: 800,
          fontFamily: "Noto Sans KR",
          fontSize: "13px",
        }}
      >
        Spotify 비밀번호
      </Box>
      <OutlinedInput
        placeholder="Spotify 비밀번호"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "16px",
          backgroundColor: "white",
        }}
      />
    </Box>
  );
};

export default PasswordInput;
