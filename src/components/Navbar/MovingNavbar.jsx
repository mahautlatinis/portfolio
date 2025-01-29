import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } rounded-full bg-gray-900 bg-opacity-90 backdrop-blur-lg p-4 shadow-2xl ring-1 ring-white ring-opacity-10`}
    >
      <nav>
        <ul className="flex space-x-4">
          <li className="text-white">Home</li>
          <li className="text-white">About</li>
          <li className="text-white">Services</li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
