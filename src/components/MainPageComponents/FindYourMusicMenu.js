import React from "react";
import { Box, Container } from "@mui/material";

import FindByMusic from "./FindByMusic";
import FindByPlaylist from "./FindByPlaylist";

const FindYourMusicMenu = () => {
  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <Box component="span">
        <FindByMusic />
        <FindByPlaylist />
      </Box>
    </Container>
  );
};

export default FindYourMusicMenu;
