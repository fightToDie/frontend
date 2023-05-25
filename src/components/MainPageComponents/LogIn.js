import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <Link to={"/login"} style={{ color: "inherit", textDecoration: "none" }}>
      <Box
        component="span"
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
        }}
      >
        Log in
      </Box>
    </Link>
  );
};

export default LogIn;
