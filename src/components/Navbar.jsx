import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home"); // aktivní sekce

  const sections = [
    { name: "Domů", id: "home" },
    { name: "Služby", id: "services" },
    { name: "O servisu", id: "about" },
    { name: "Náš tým", id: "team" },
    { name: "Kontakt", id: "contact" },
  ];

  // scroll to section
  const handleScroll = (id) => {
    setOpen(false); // zavře mobilní menu

    // scroll po krátkém delay, aby DOM stihl render
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -76; // výška navbaru
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 50); // 50ms stačí
  };

  // scroll spy efekt
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + 80; // 80 = výška navbaru + margin
      let current = "home";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          current = sec.id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-base-300 shadow-md py-[6px]">
      <div className="navbar container mx-auto px-4">
        <div className="flex-1">
          <a href=" " className="btn btn-ghost hover:bg-transparent hover:shadow-none text-4xl italic var1">
            AutoFix
          </a>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-none">
          <ul className="menu menu-horizontal gap-4 text-xl font-sans font-medium">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a
                  onClick={() => handleScroll(sec.id)}
                  className={`var1 cursor-pointer transition ${active === sec.id ? "underline font-bold" : ""}`}
                >
                  {sec.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile dropdown */}
        <div className="md:hidden flex-none">
          <button
            className="btn btn-square btn-ghost"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="menu menu-vertical px-4 py-4 bg-base-100 border-t-2 w-full md:hidden">
          {sections.map((sec) => (
            <li key={sec.id}>
              <a
                onClick={() => handleScroll(sec.id)}
                className={`nav-link cursor-pointer text-lg transition ${active === sec.id ? "underline font-bold" : ""}`}
              >
                {sec.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
