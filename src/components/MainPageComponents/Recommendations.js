import React from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Recommendations = () => {
  return (
    <>
      <Link to={"/reco"} style={{ color: "inherit", textDecoration: "none" }}>
        <Box
          component="span"
          sx={{
            fontWeight: 700,
            fontFamily: "Noto Sans KR",
            fontSize: "15px",
          }}
        >
          Recommendations
        </Box>
      </Link>
      <span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </>
  );
};

export default Recommendations;
