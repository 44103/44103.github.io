import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Menu from "./Menu";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex px-5 py-2 bg-primary text-white fixed w-full">
      <a href="/#" className="logo text-2xl font-bold text-accent">
        44103
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex font-mono">
          <Menu mode="desktop" />
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col font-mono">
          <Menu handleMenu={handleToggle} mode="mobile" />
        </ul>
      </nav>

      {/* Toggle Button */}
      <button onClick={handleToggle} className="block md:hidden px-1">
        {toggle ? <CloseIcon /> : <MenuIcon />}
      </button>
    </header>
  );
};

export default Header;
