import React from "react";
import "./index";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Dictionary defaultKeyword="summer" />
        </header>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Stella5791/Dictionary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Stella Bullo{" "}
            </a>
            as open-source and stored on{" "}
            <a href="https://playful-gecko-ed5205.netlify.app/">Netlify</a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}
