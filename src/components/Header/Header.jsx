import React, { useEffect, useState } from "react";

import { Container } from "../../components";

import css from "./Header.module.css";
import { BrandLogo } from "../../assets";

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
      <div className="fixed top-0 z-[100] flex h-[42px] w-full items-center bg-primary-dark">
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

          <div className="hidden h-full items-center bg-secondary px-4 font-semibold text-white md:flex">
            <span>24x7 Emergency: 9073672051 | 9073932051</span>
          </div>
        </Container>
      </div>

      <nav
        className={`${css.navbar} ${scrolled ? `${css.navbarScrolled} opacity-95` : ""}`}
      >
        <Container
          data-aos="fade-up"
          className="flex items-center justify-between"
        >
          <div className="text-2xl">
            <a href="#">
              <img
                src={BrandLogo}
                alt="INNERWORK LEGAL SERVICES"
                className="w-40"
              />
            </a>
          </div>

          <ul className="hidden items-center gap-10 text-xl md:flex">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
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
