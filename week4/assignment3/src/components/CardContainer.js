import React from "react";
import Card from "./Card";

export default function CardContainer({ isHidden }) {
  return (
    <section className={`card-container ${isHidden ? "hidden" : null}`}>
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}
