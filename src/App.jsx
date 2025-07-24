import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20"> {/* Adjust for fixed header */}
        <About />
      </main>
    </div>
  );
}

export default App;
