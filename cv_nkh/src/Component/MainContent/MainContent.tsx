import { Button, ButtonGroup } from "@mui/material";
import { Home } from "./Home/Home";
import "./MainContent.scss";

export const MainContent: React.FC = () => {
  return (
    <div className="p-[20px] body" style={{ height: "100vh" }}>
      <div className="main-content" style={{ height: "calc(100vh - 40px)" }}>
        <div className="" style={{ height: "500px" }}>
          <Home />
        </div>
        <div className="" style={{ height: "500px" }}>
          <ButtonGroup
            variant="contained"
            aria-label="text button group"
            fullWidth
          >
            <Button
              style={{
                borderRadius: "0",
                backgroundColor: "#E71D36",
                color: "#ffffff",
              }}
            >
              Download my CV
            </Button>
            <Button
              style={{
                borderRadius: "0",
                backgroundColor: "#06233B",
                color: "#ffffff",
              }}
            >
              About me
            </Button>
          </ButtonGroup>
        </div>
        <div className="" style={{ height: "500px" }}>
          123123
        </div>
      </div>
    </div>
  );
};
