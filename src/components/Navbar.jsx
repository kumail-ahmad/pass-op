// import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-300 rounded-xl">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <div className="logo ml-3 text-2xl">
              <span className="text-red-800">&lt;</span>
              Pass
              <span className="text-red-800">OP /&gt;</span>
            </div>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              to="https://github.com/kumail-ahmad"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              Github
            </Link>
            <Link
              to="https://www.linkedin.com/in/kumail-ahmad-a3035b15b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              className="mr-5 hover:text-gray-900"
            >
              LinkedIn
            </Link>
            <Link to="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
          </nav>
          <button className="inline-flex items-center bg-red-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-2xl text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
