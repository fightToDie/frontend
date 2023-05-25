import React from "react";
import { Box, Container } from "@mui/material";
import Spotify from "react-spotify-embed";

const RecommendationList = () => {
  return (
    <Container
      sx={{
        marginTop: "50px",
      }}
    >
      <Box>
        {spotifyData.map((item) => (
          <Box
            sx={{
              marginTop: "20px",
              ":hover": { transform: "scale(1.1)" },
            }}
          >
            <Spotify key={item.link} wide link={item.link} />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

const spotifyData = [
  {
    link: "https://open.spotify.com/track/1tgYsSC4iBMXLzNbUdmBVM?si=e2c2ee61cd974521",
  },
  {
    link: "https://open.spotify.com/track/79jgzziAIoymcQp3n2GL1M?si=ef6f3c3c785447b1",
  },
  {
    link: "https://open.spotify.com/track/4xsaymAS5MiNrYUSiHdA9G?si=e405ad9e4bce42ed",
  },
  {
    link: "https://open.spotify.com/track/135K9BjibW3d4kjDdDW5Jh?si=05244cf063da4fdb",
  },
  {
    link: "https://open.spotify.com/track/7I5WT7DtpwSAhEeDLpZEfm?si=e2dffe4883434b66"
  },
  {
    link: "https://open.spotify.com/track/2odm919sRfQIhH2na8YSKK?si=4fde7e061ef44556"
  }
];

export default RecommendationList;
