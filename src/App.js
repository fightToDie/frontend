import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage/MainPage";
import RecommendationPage from "./pages/RecommendationPage/RecommendationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Container
      maxWidth={false}
      disableGutters={true}
      sx={{
        height: 2000,
        background: "linear-gradient(165deg, #97A2BF, #344162 30%, black)",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="reco" element={<RecommendationPage />} />
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
