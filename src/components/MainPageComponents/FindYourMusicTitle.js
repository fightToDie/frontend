import React from "react";
import { Box, Container } from "@mui/material";

const FindYourMusicTitle = () => {
  return (
    <Container
      sx={{
        marginTop: "200px",
      }}
    >
      <Box
        sx={{
          fontWeight: 900,
          fontFamily: "Noto Sans KR",
          fontSize: "70px",
          color: "white",
        }}
      >
        Find your
      </Box>

      <Box
        component="span"
        sx={{
          fontWeight: 900,
          fontFamily: "Noto Sans KR",
          fontSize: "70px",
          color: "white",
        }}
      >
        music
      </Box>
    </Container>
  );
};

export default FindYourMusicTitle;
