import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
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
        {toggle ? <MdClose /> : <FiMenu />}
      </button>
    </header>
  );
};

export default Header;
