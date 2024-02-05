import React, { useState } from "react";

export default function Hero() {
  const [welcome, setWelcome] = useState(true);
  const handleClick = () => {
    setWelcome(!welcome);
  };
  return (
    <section className="hero" onClick={handleClick}>
      <h1>{welcome ? "Welcome Message" : "Have a Good Time!"}</h1>
    </section>
  );
}
