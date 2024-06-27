// Layout .js

import { Outlet, Link, useLocation } from "react-router-dom";
import "../assets/styles/global.scss";
import logo from "../assets/images/britt-logo.webp";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <div className="left">
            <Link to="/about">about</Link>
            <Link to="/projects">projects</Link>
          </div>

          <Link to="/" className="logo">
            <img src={logo} alt="britt logo" />
          </Link>

          <div className="right">
            <Link to="/contact" className="button">
              contact us
            </Link>
          </div>
        </nav>
      </header>

      <main>
        {location.pathname !== "/" && (
          <Link className="home-button" to="/">
            &#x276C; home
          </Link>
        )}
        <Outlet />
      </main>

      <footer>
        <div className="social-links"></div>
      </footer>
    </>
  );
};

export default Layout;
