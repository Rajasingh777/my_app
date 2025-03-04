import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLoginLogout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const LoginFunc = () => {
    <Redirect to="/login" />;
  };

  const url = "http://localhost:3000/login";

  return (
    <nav className="bg-white shadow h-14 flex items-center justify-between px-4">
      <div className="flex items-center">
        <img src="/applog.png" alt="Logo" className="h-10 mr-4" />
        <div className="text-xl font-bold">MyApp</div>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="ml-4 p-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ul className="flex space-x-4">
        <li>
          <a href="#workspace" className="text-gray-700 hover:text-gray-900">
            Workspace
          </a>
        </li>
        <li>
          <a href="#about" className="text-gray-700 hover:text-gray-900">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
        </li>
        <li>
          <button onClick={LoginFunc}>Login</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
