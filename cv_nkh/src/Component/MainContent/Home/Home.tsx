import { Divider, Typography } from "@mui/material";
import avatar from "../../../asset/images/luke.png";

export const Home: React.FC = () => {
  return (
    <div className="pt-[50px] px-[50px] flex justify-between">
      <div className="self-center items-center">
        <Typography className="text-red-500">Hi, my name is</Typography>
        <Typography variant="h1">
          <p className="font-sans ">Luke</p>
        </Typography>
        <Divider color="#e71d36" sx={{ height: 2, width: "92px" }} />
        <Typography variant="h6">I'm Front end </Typography>
        <Typography variant="h6">Developer</Typography>
      </div>
      <img src={avatar} alt="avatar" width={400} />
    </div>
  );
};
