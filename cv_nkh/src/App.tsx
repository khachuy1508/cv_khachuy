import { Box, ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import { Layout } from "./Component/Layout/Layout";
import { MainContent } from "./Component/MainContent/MainContent";

function App() {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: "#011627",
          height: "100vh",
        }}
      >
        <Layout>
          <MainContent />
        </Layout>
      </Box>
    </ThemeProvider>
  );
}

export default App;
