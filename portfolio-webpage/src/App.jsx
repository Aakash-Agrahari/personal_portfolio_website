import React from "react";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <footer className="footer">
        © {new Date().getFullYear()} Aakash Kumar Agrahari | All rights reserved.
      </footer>
    </div>
  );
}
