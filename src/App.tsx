import React from "react";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className="flex">
      <Navbar />
      <div>
        <Header />
      </div>
    </div>
  );
};

export default App;
