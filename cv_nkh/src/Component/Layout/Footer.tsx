import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { IconButton } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <div className="inline">
      <IconButton aria-label="facebook">
        <FacebookIcon />
      </IconButton>
      <IconButton aria-label="linked">
        <LinkedInIcon />
      </IconButton>
    </div>
  );
};
