import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Manager from "./components/manager.jsx";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className=" flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>
        <Manager />
        <main className="flex-grow">
          <App />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  </StrictMode>
);
