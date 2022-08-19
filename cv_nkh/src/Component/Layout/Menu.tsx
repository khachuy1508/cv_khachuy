import { useState } from "react";
import "./Menu.scss";

export const Menu: React.FC = () => {
  const [active] = useState(true);
  return (
    <ul className="menu">
      <li className={active ? "active" : ""}>Home</li>
      <li className={active ? "active" : ""}>About</li>
      <li className={active ? "active" : ""}>Resume</li>
      <li className={active ? "active" : ""}>Services</li>
      <li className={active ? "active" : ""}>Contact</li>
    </ul>
  );
};
