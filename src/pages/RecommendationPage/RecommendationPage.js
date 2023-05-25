import React from "react";
import { Box, Container, Grid } from "@mui/material";

import MainMenu from "../../components/MainPageComponents/MainMenu";
import MainTitle from "../../components/MainPageComponents/MainTitle";
import FindYourMusicMenu from "../../components/MainPageComponents/FindYourMusicMenu";
import SearchBar from "../../components/MainPageComponents/FindYourMusicSearchBar";
import RecommendationList from "../../components/RecommendationPageComponents/RecommendationList";

const RecommendationPage = () => {
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

      <Box sx={{ marginTop: "100px" }}>
        <FindYourMusicMenu />
        <SearchBar />
      </Box>
      
      <RecommendationList />
    </Container>
  );
};

export default RecommendationPage;
