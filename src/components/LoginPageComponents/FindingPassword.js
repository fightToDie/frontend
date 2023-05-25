import React from "react";
import { Grid, Button } from "@mui/material";

const FindingPassword = () => {
  const findingPasswordURL = "https://accounts.spotify.com/ko/password-reset";

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      sx={{
        width: "460px",
      }}
    >
      <Button
        sx={{
          fontWeight: 700,
          fontFamily: "Noto Sans KR",
          fontSize: "14px",
          color: "#D2D2D2",
        }}
        onClick={() => {
          window.open(findingPasswordURL);
        }}
      >
        비밀번호 찾기
      </Button>
    </Grid>
  );
};

export default FindingPassword;
