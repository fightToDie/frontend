import React from "react";
import { Box } from "@mui/material";

const FindByMusic = () => {
  return (
    <>
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
        }}
      >
        Name
      </Box>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </>
  );
};

export default FindByMusic;
