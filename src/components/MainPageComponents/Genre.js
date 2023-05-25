import React from "react";
import { Box, Container } from "@mui/material";
import GenreItemList from "./GenreItemList";

const Genre = () => {
  return (
    <Container
      sx={{
        marginTop: "150px",
      }}
    >

      <Box
        sx={{
          //fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "15px",
          color: "white",
        }}
      >
        선호 장르 기반 추천
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
        K-POP
      </Box>
      
      <GenreItemList />
    </Container>
  );
};

export default Genre;
