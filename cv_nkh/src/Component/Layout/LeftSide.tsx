import { Menu } from "./Menu";
import logo from "../../asset/images/logo.png";
import { Footer } from "./Footer";

export const LeftSide: React.FC = () => {
  return (
    <div
      className="flex flex-col justify-between overflow-hidden p-[15px]"
      style={{
        height: "100%",
        borderLeft: "solid 1px rgb(255 255 255 / 15%)",
      }}
    >
      <img src={logo} alt="logo" className="w-40" />
      <Menu />
      <Footer />
    </div>
  );
};
