import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const MainTitle = () => {
  return (
    <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
      <Box
        component="span"
        sx={{
          fontWeight: 800,
          fontFamily: "Noto Sans KR",
          fontSize: "30px",
        }}
      >
        Nota
      </Box>
    </Link>
  );
};

export default MainTitle;
