import React, { useEffect, useState } from "react";

import { Container } from "../../components";

import css from "./Header.module.css";

const Header = (props) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="bg-primary-dark fixed top-0 z-[100] flex h-[42px] w-full items-center">
        <Container className="flex h-full items-center justify-center gap-7 md:justify-end">
          <ul className="flex items-center gap-7 text-white">
            <a href="https://github.com/supratim531">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/supratim531">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/supratim531">
              <i className="fa-brands fa-instagram text-lg"></i>
            </a>
            <a href="https://github.com/supratim531">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </ul>

          <div className="bg-secondary hidden h-full items-center px-4 font-semibold text-white md:flex">
            <span>24x7 Emergency: 9073672051 | 9073932051</span>
          </div>
        </Container>
      </div>

      <nav
        className={`${css.navbar} ${scrolled ? `${css.navbarScrolled} opacity-85` : ""}`}
      >
        <Container className="flex items-center justify-between">
          <div className="text-2xl">Logo</div>

          <ul className="hidden items-center gap-10 text-xl md:flex">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact Us</li>
          </ul>

          <button className="block md:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
