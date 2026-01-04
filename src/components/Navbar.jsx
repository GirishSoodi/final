import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);

  // 🔹 Keep navbar visible on Home section
  useEffect(() => {
    const homeSection = document.querySelector("#home");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (homeSection) observer.observe(homeSection);

    return () => {
      if (homeSection) observer.unobserve(homeSection);
    };
  }, []);

  // 🔹 Scroll direction logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (forceVisible) {
        setVisible(true);
      } else {
        if (currentScrollY > lastScrollY.current) {
          // scrolling DOWN
          setVisible(false);
        } else {
          // scrolling UP
          setVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between
        px-6 py-4 z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <div className="text-white font-bold text-xl">Girish</div>
        </div>

        {/* Menu Button */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href="#contact"
            className="bg-gradient-to-r from-pink-500 to-blue-500
            text-white px-5 py-2 rounded-full font-medium shadow-lg
            hover:opacity-90 transition-opacity duration-300"
          >
            Reach Out
          </a>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
