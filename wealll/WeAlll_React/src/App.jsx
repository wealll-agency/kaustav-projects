
import "./assets/css/menu-main.css";
import "./assets/css/menu-new.css";
import "./assets/css/swiper.min.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import Header from "./Components/Header"
import Home from "./Components/Home"
import { useEffect } from "react";

function App() {

 useEffect(() => {
    const scripts = [
      "./assets/js/swiper.min.js",
      "./assets/js/TweenMax.min.js",
      "./assets/js/pix-js.js",
      "./assets/js/main.js",

    ];

    scripts.forEach(src => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false; // maintains order
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach(src => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);




  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  )
}

export default App
