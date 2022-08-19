import { Box, Grid, ThemeProvider } from "@mui/material";

import { createTheme } from "@mui/material/styles";

import { Layout } from "./Component/Layout/Layout";

function App() {
  const darkTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <Grid>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            bgcolor: "#011627",
            height: "100vh",
          }}
        >
          <Layout />
        </Box>
      </ThemeProvider>
    </Grid>
  );
}

export default App;
