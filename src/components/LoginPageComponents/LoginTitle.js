import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LoginTitle = () => {
  return (
    <Link to={"/"} style={{ color: "inherit", textDecoration: "none" }}>
      <Box
        component="span"
        sx={{
          fontWeight: 800,
          fontFamily: "Noto Sans KR",
          fontSize: "52px",
        }}
      >
        Nota
      </Box>
    </Link>
  );
};

export default LoginTitle;
