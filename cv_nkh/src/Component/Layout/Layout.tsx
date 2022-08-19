import { Grid } from "@mui/material";
import { LeftSide } from "./LeftSide";

export const Layout: React.FC = () => {
  return (
    <Grid
      container
      className="text-left mx-auto py-15 max-w-screen-xl text-white"
    >
      <Grid xs={3} style={{ height: "100vh" }}>
        <LeftSide />
      </Grid>
      <Grid xs={9}></Grid>
    </Grid>
  );
};
