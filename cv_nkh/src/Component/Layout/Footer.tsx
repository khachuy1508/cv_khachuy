import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { IconButton, Link } from "@mui/material";

export const Footer: React.FC = () => {
  return (
    <div className="inline">
      <IconButton aria-label="facebook">
        <a
          href="https://www.facebook.com/khachuy158"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
      </IconButton>
      <IconButton aria-label="linked">
        <a
          href="https://www.linkedin.com/in/khachuy158"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </IconButton>
    </div>
  );
};
