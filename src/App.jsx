import React, { useState } from "react";
import Search from "./Components/Search.jsx";
const App = () => {
  const [searhTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>
        <Search searchTerm={searhTerm} setSearchTerm={setSearchTerm} />
        <h1>{searhTerm}</h1>
      </div>
    </main>
  );
};
export default App;
