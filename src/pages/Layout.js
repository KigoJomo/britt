// Layout .js

import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { Button } from "./Elements";
import Footer from "./Footer";

import logo from "../assets/images/britt-logo.webp";

const Logo = () => {
  return (
    <>
      <Link to="/" className="flex items-center gap-1">
        <img src={logo} alt="britt logo" className="h-6" />
        <h3 className="capitalize font-semibold">Brittocharette</h3>
      </Link>
    </>
  );
};

const MenuButton = ({ open, onClick }) => {
  return (
    <button
      id="menu-button"
      className="flex flex-col items-end space-y-1 w-8"
      onClick={onClick}
      aria-label={open ? "Close Menu" : "Open Menu"}
    >
      {open ? (
        <>
          <span className="w-full h-0.5 bg-black rounded"></span>
          <span className="w-9/12 h-0.5 bg-black rounded"></span>
        </>
      ) : (
        <p className="text-3xl">&#x292C;</p>
      )}
    </button>
  );
};

const NavigationLink = ({ label, to, onClick}) => {
  return (
    <li
      className="w-full flex justify-center border-b border-b-gray">
      <Link
        to={to}
        className="text-black capitalize w-full text-center p-4"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="bg-white flex items-center h-16 z-20 w-screen overflow-y-visible sticky top-0">
        <nav className="container mx-auto justify-between items-center p-4 hidden lg:flex">
          <div className="flex space-x-4 w-1/5">
            <Link
              to="/about"
              className="text-gray capitalize hover:text-black hover:font-semibold"
            >
              about
            </Link>
            <Link
              to="/projects"
              className="text-gray capitalize hover:text-black hover:font-semibold"
            >
              projects
            </Link>
          </div>

          <Logo />

          <div className="flex space-x-4 justify-end  w-1/5">
            <Button label="contact us" to="/contact" />
          </div>
        </nav>

        <div id="mobile-header" className="flex md:hidden justify-between items-center p-4 w-full relative z-20 overflow-visible">
          <Logo />

          <MenuButton open={!menuOpen} onClick={toggleMenu} />

          <nav
            className={`absolute left-0 w-full h-screen bg-white ${
              menuOpen ? "translate-x-0" : "translate-x-full"
              }`}
            style={{top: "98%"}}
          >
            <ul className="flex flex-col items-center justify-start gap-4 w-full h-full px-12 py-4">
              <NavigationLink label="Home" to="/" onClick={closeMenu} />
              <NavigationLink
                label="About Us"
                to="/about"
                onClick={closeMenu}
              />
              <NavigationLink
                label="Projects"
                to="/projects"
                onClick={closeMenu}
              />
              <NavigationLink
                label="Contact Us"
                to="/contact"
                onClick={closeMenu}
              />
            </ul>
          </nav>
        </div>
      </header>

      <main className="w-full bg-white flex flex-col gap-24 flex-1">
        {location.pathname !== "/" && (
          <Link className="home-button" to="/">
            &#x276C; home
          </Link>
        )}
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;
