import React from "react";
import { Box, OutlinedInput } from "@mui/material";

const EmailInput = () => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 0.5, width: "450px" },
        marginTop: "30px",
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
        Spotify 이메일 주소
      </Box>
      <OutlinedInput
        placeholder="Spotify 이메일 주소"
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

export default EmailInput;
