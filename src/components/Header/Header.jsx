import React, { useEffect, useState, useRef } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Book,
  BookOpen,
  File,
  ChevronUp,
  ChevronDown,
  Users,
} from "react-feather";

import {
  Container,
  SidebarMaybe,
  Dropdown,
  DropdownItem,
  DropdownMenu,
} from "../../components";

import css from "./Header.module.css";
import { BrandLogo } from "../../assets";

const Header = (props) => {
  const sidebarMaybeRef = useRef(null);
  const [drop, setDrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropArrow = (e) => {
    setDrop(!drop);
  };

  const toggleSidebar = () => {
    sidebarMaybeRef.current.toggle();
  };

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
            {/* <li>
              <a href="https://x.com/Innerworkllp" target="_blank">
                <i className="fa-brands fa-twitter duration-200 hover:text-secondary"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/innerworkadvisorsllp"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f duration-200 hover:text-secondary"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/innerworkadvisorsllp"
                target="_blank"
              >
                <i className="fa-brands fa-instagram text-lg duration-200 hover:text-secondary"></i>
              </a>
            </li> */}

            <li>
              <a
                href="https://www.linkedin.com/in/innerwork-legal-services-18507035b"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in duration-200 hover:text-secondary"></i>
              </a>
            </li>
          </ul>

          <div className="hidden h-full items-center bg-secondary px-4 font-semibold text-white md:flex">
            <span>24x7 Emergency: 9073932051</span>
          </div>
        </Container>
      </div>

      <SidebarMaybe ref={sidebarMaybeRef}>
        <div className="flex h-full flex-col justify-between bg-primary-dark pb-10 pt-10">
          {/* <div className="flex flex-col gap-4">
            <div className="text-2xl font-medium text-secondary">
              24x7 Emergency
            </div>

            <div className="flex items-center gap-4 text-lg">
              <i className="fa-solid fa-phone text-secondary"></i>
              <a href="tel:+919073672051" className="text-white">
                (+91) 90736 72051
              </a>
            </div>

            <div className="flex items-center gap-4 text-lg">
              <i className="fa-solid fa-phone text-secondary"></i>
              <a href="tel:+919830232051" className="text-white">
                (+91) 98302 32051
              </a>
            </div>
          </div> */}

          <ul className="flex flex-col text-xl text-white [&>li]:h-16 [&>li]:text-center">
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#`}
                className="flex h-full w-full items-center justify-center"
              >
                Home
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#about`}
                className="flex h-full w-full items-center justify-center"
              >
                About Us
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#services`}
                className="flex h-full w-full items-center justify-center"
              >
                Services
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#nri`}
                className="flex h-full w-full items-center justify-center"
              >
                NRI
              </HashLink>
            </li>
            <li className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary">
              <HashLink
                smooth
                to={`/#contact`}
                className="flex h-full w-full items-center justify-center"
              >
                Contact Us
              </HashLink>
            </li>
            <li
              onClick={(e) => e.stopPropagation()}
              className="hover:bg-white hover:text-secondary active:bg-white active:text-secondary"
            >
              <div
                onClick={dropArrow}
                className="flex h-full w-full items-center justify-center gap-1"
              >
                <span>More</span>
                <span className="mt-1">
                  {drop ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </div>

              <ul
                style={{
                  height: drop ? "192px" : "0px",
                  overflow: drop ? "visible" : "hidden",
                }}
                className={classNames(
                  css.dropdown,
                  "flex flex-col text-xl text-white [&>li]:text-center",
                )}
              >
                <li
                  onClick={toggleSidebar}
                  style={{
                    height: drop ? "64px" : "0px",
                  }}
                  className="z-10 flex items-center justify-center gap-2 border-b border-t border-b-white border-t-white bg-primary-dark"
                >
                  <Users size={20} />
                  <HashLink smooth to={`/#team`}>
                    Team
                  </HashLink>
                  {/* <HashLink smooth to={`/#nri`}>
                    NRI Legal Services
                  </HashLink> */}
                </li>
                <li
                  style={{
                    height: drop ? "64px" : "0px",
                  }}
                  className="z-10 flex items-center justify-center gap-2 border-b border-t border-b-white border-t-white bg-primary-dark"
                >
                  <Book size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases"
                    target="_blank"
                  >
                    Our Blogs
                  </a>
                </li>
                <li
                  style={{
                    height: drop ? "64px" : "0px",
                  }}
                  className="z-10 flex items-center justify-center gap-2 border-b border-b-white bg-primary-dark"
                >
                  <BookOpen size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases/category/legal-insights"
                    target="_blank"
                  >
                    Legal Insights
                  </a>
                </li>
                <li
                  style={{
                    height: drop ? "64px" : "0px",
                  }}
                  className="z-10 flex w-full items-center justify-center gap-2 border-b border-b-white bg-primary-dark"
                >
                  <File size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases/category/case-studies"
                    target="_blank"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="font-medium text-secondary">24x7 Emergency</div>

            <div className="flex items-center gap-4 text-sm">
              <i className="fa-solid fa-phone text-secondary"></i>
              <a href="tel:+919073672051" className="text-white">
                (+91) 90739 32051
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <i className="fa-solid fa-phone text-secondary"></i>
              <a href="tel:+919830232051" className="text-white">
                (+91) 98302 32051
              </a>
            </div>
          </div>
        </div>
      </SidebarMaybe>

      <nav
        className={`${css.navbar} ${scrolled ? `${css.navbarScrolled} border-b-4 border-[#C9A267] opacity-100` : "border-b-4 border-transparent"}`}
      >
        <Container
          data-aos="fade-up"
          className="flex flex-row items-center justify-between"
        >
          <div className="ml-auto mr-auto text-2xl md:m-0">
            <HashLink smooth to={`/#`}>
              <img
                src={BrandLogo}
                alt="INNERWORK LEGAL SERVICES"
                className="w-40"
              />
            </HashLink>
          </div>

          <ul className="hidden items-center gap-10 text-xl lg:flex">
            <li>
              <HashLink smooth to={`/#`}>
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#about`}>
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#services`}>
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#nri`}>
                NRI
              </HashLink>
            </li>
            <li>
              <HashLink smooth to={`/#contact`}>
                Contact Us
              </HashLink>
            </li>
            <li className="cursor-pointer !text-white hover:!text-black">
              <Dropdown
                className="bg-black"
                trigger={<DropdownMenu>More Info</DropdownMenu>}
              >
                <DropdownItem>
                  <Users size={20} />
                  <HashLink smooth to={`/#team`}>
                    Team
                  </HashLink>
                  {/* <Link to={"nri-legal-services"}>NRI Legal Services</Link> */}
                </DropdownItem>
                <DropdownItem>
                  <Book size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases"
                    target="_blank"
                  >
                    Our Blogs
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <BookOpen size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases/category/legal-insights"
                    target="_blank"
                  >
                    Legal Insights
                  </a>
                </DropdownItem>
                <DropdownItem>
                  <File size={20} />
                  <a
                    href="https://blog.innerworklegalservices.com/insights-cases/category/case-studies"
                    target="_blank"
                  >
                    Case Studies
                  </a>
                </DropdownItem>
              </Dropdown>
            </li>
          </ul>

          <button onClick={toggleSidebar} className="block lg:hidden">
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </Container>
      </nav>
    </header>
  );
};

export default Header;
