import React from "react";
import { Grid, Box } from "@mui/material";

const SignUpText = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingTop: "20px",
      }}
    >
      <div
        style={{
          width: "450px",
          borderStyle: "solid",
          borderWidth: "0.3px",
          borderColor: "#D2D2D2",
        }}
      />
      <Box
        sx={{
          margin: "35px 0 30px 0",
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "17px",
          color: "#D2D2D2",
        }}
      >
        계정이 없나요?
      </Box>
    </Grid>
  );
};

export default SignUpText;
