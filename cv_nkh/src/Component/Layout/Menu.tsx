import { useState } from "react";
import "./Menu.scss";

export const Menu: React.FC = () => {
  const [active] = useState(true);
  return (
    <ul className="menu">
      <li className={active ? "active" : ""}>Home</li>
      <li>About</li>
      <li>Resume</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>
  );
};
