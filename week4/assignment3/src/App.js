import React, { useState } from "react";
import MobileMenu from "./components/MobileMenu";
import CardContainer from "./components/CardContainer";
import CallToAction from "./components/CallToAction";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";

function App() {
  const [showMore, setShowMore] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setShowMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <div>
      <MobileMenu showMobileMenu={showMobileMenu} closeMenu={closeMobileMenu} />
      <NavBar openMenu={openMobileMenu} />
      <Hero />
      <main>
        <h2>Section Title</h2>
        <CardContainer isHidden={false} />
        <CallToAction
          onClick={() => {
            setShowMore(false);
          }}
        />
        <CardContainer isHidden={showMore} />
      </main>
    </div>
  );
}

export default App;
