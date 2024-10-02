import React from "react";

import logo from "./site-logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="App-logo" />
          <h1 className="title-text">Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sky" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a
            href="https://www.fatimabartels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fatima Bartels
          </a>{" "}
          and hosted on Netlify
        </footer>
      </div>
    </div>
  );
}
