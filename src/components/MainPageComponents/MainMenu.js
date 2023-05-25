import React from "react";
import { Box } from "@mui/material";

import Recommendations from "./Recommendations";
import SignUp from "./SignUp";
import LogIn from "./LogIn";

const MainMenu = () => {
  return (
    <Box component="span">
      <Recommendations />
      <SignUp />
      <LogIn />
    </Box>
  );
};

export default MainMenu;
