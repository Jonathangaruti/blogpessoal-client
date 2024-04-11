import React from "react";
import "./App.css";
import Home from "./paginas/home/Home";
import Navbar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Login from "./paginas/login/Login";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}
export default App;
