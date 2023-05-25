import React from "react";
import { Container, Grid } from "@mui/material";

import MainTitle from "../../components/MainPageComponents/MainTitle";
import MainMenu from "../../components/MainPageComponents/MainMenu";
import FindYourMusicTitle from "../../components/MainPageComponents/FindYourMusicTitle";
import FindYourMusicSearchBar from "../../components/MainPageComponents/FindYourMusicSearchBar";
import FindYourMusicMenu from "../../components/MainPageComponents/FindYourMusicMenu";
import Genre from "../../components/MainPageComponents/Genre";

const MainPage = () => {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingTop: "30px",
        }}
      >
        <MainTitle />
        <MainMenu />
      </Grid>

      <FindYourMusicTitle />
      <FindYourMusicMenu />
      <FindYourMusicSearchBar />
      <Genre />
    </Container>
  );
};

export default MainPage;
