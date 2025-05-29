"use client";
import React, { useState } from "react";
import "./styles.css";
import SearchInput from "../input";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import banner from "../../assets/banner.png";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      if (!prev) setShowSearch(false);
      return !prev;
    });
  };

  const toggleSearch = () => {
    setShowSearch((prev) => {
      if (!prev) setMenuOpen(false);
      return !prev;
    });
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="mobile-menu-button">
          <button onClick={toggleMenu} className="menu-toggle">
            <MenuIcon fontSize="medium" />
          </button>
          <button onClick={toggleSearch} className="menu-toggle">
            <SearchIcon fontSize="medium" />
          </button>
        </div>

        <div className="header-left">
          <Link href="/">
            <Image src={banner} alt="TodoPass" className="logo" priority />
          </Link>
        </div>

        <div className={`search-wrapper ${showSearch ? "mobile" : ""}`}>
          <SearchInput />
        </div>

        <div className="header-right">
           <Link href="/mi-cuenta" className="header-link">
            <AccountCircleIcon style={{ height: 30, width: 30 }} />
          </Link>
          <Link href="/carrito" className="header-link">
            <ShoppingCartIcon style={{ height: 30, width: 30 }} fontSize="medium" />
          </Link>
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? "show" : ""}`}>
        <ul className="nav-list">
          <li>
            <a href="#">Recitales</a>
          </li>
          <li>
            <a href="#">Teatro</a>
          </li>
          <li>
            <a href="#">Eventos Sociales</a>
          </li>
          <li>
            <a href="#">Varios</a>
          </li>
          <li>
            <a href="#">¿Que es TicketDess?</a>
          </li>
          <li>
            <a href="#">Preguntas frecuentes</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
