"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useTranslation } from "react-i18next";
import i18next from "../../i18n";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    localStorage.removeItem("lang");
    i18next.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  useEffect(() => {
    i18next.changeLanguage(i18next.language);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-30 bg-color_black shadow-md px-5">
        <div className="flex justify-between items-center p-2">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-6.png"
              alt="Casa lalla takerkoust logo"
              width={120}
              height={120}
              className="cursor-pointer w-[70%] h-[70%] md:w-full md:h-full"
            />
          </Link>
          <div className="flex justify-center items-center ">
            {/* Book table button */}
            {/*<div className="hidden md:block">
              <Link
                href="#"
                target="_blank"
                className="border border-background bg-transparent text-background uppercase px-4 py-2 hover:bg-background hover:text-primary transition-all ease-linear text-xs"
              >
                Book a Table
              </Link>
  </div>*/}
            {/* Langue */}
            <div
              className="relative "
              onMouseLeave={() => setIsDropdownOpen(false)}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              <button className="text-white px-4 py-2 flex justify-center items-center gap-2">
                <img src={t("navbar.lang")} className="w-5 h-5 md:w-7 md:h-7" />
                <IoMdArrowDropdown size={18} />
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-8 bg-color_black mt-2 py-2 w-32 shadow-lg flex justify-center items-center">
                  <li
                    className="px-4 py-2 hover:bg-color_white rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("en")}
                  >
                    <img src="/english.png" className="w-5 h-5 md:w-7 md:h-7" />
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-color_white rounded-lg cursor-pointer"
                    onClick={() => changeLanguage("fr")}
                  >
                    <img src="/france.png" className="w-5 h-5 md:w-7 md:h-7" />
                  </li>
                </ul>
              )}
            </div>
            {/* Menu Icon */}
            <div className="pt-2">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="#fff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Full-screen mobile menu */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-700"
        enterFrom="transform -translate-y-full"
        enterTo="transform translate-y-0"
        leave="transition ease-in duration-500"
        leaveFrom="transform translate-y-0"
        leaveTo="transform -translate-y-full"
      >
        <div className="fixed top-0 left-0 w-full h-screen bg-color_black z-20 flex flex-col items-center justify-center">
          <ul className="space-y-5 uppercase md:space-y-10 text-center text-white text-xl md:text-3xl font-light">
            <li>
              <Link href="/" onClick={() => setIsOpen(!isOpen)}>
                {t("navbar.home")}
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setIsOpen(!isOpen)}>
                {t("navbar.about")}
              </Link>
            </li>
            <li>
              <Link href="#events" onClick={() => setIsOpen(!isOpen)}>
                {t("navbar.events")}
              </Link>
            </li>
            <li>
              <Link href="#activities" onClick={() => setIsOpen(!isOpen)}>
                {t("navbar.activities")}
              </Link>
            </li>
            <li>
              <Link href="/daypass" onClick={() => setIsOpen(!isOpen)}>
                Day Pass
              </Link>
            </li>
            <li>
              <Link href={t("navbar.menu")} target="_blank">
                MENU
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setIsOpen(!isOpen)}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/gallery">{t("navbar.gallery")}</Link>
            </li>
          </ul>
        </div>
      </Transition>
    </>
  );
};

export default Navbar;
