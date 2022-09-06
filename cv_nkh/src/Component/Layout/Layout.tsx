import { Grid } from "@mui/material";
import { LeftSide } from "./LeftSide";

export const Layout: React.FC<any> = (props) => {
  return (
    <Grid
      container
      className="text-left mx-auto py-15 max-w-screen-lg text-white"
    >
      <Grid xs={3} style={{ height: "100vh" }}>
        <LeftSide />
      </Grid>
      <Grid xs={9}>{props.children}</Grid>
    </Grid>
  );
};
