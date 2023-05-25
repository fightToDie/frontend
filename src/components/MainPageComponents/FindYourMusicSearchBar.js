import React from "react";
import { Container, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const FindYourMusicSearchBar = () => {
  return (
    <Container>
      <Paper
        component="form"
        variant="outlined"
        sx={{
          p: "15px",
          marginTop: "15px",
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          boxShadow: "0",
        }}
      >
        <SearchIcon
          sx={{
            width: "35px",
            height: "35px",
            color: "black",
          }}
        />
        <InputBase
          sx={{
            paddingLeft: "10px",
            fontWeight: 700,
            fontFamily: "Noto Sans KR",
            fontSize: "15px",
          }}
          placeholder="Search"
        />
      </Paper>
    </Container>
  );
};

export default FindYourMusicSearchBar;
