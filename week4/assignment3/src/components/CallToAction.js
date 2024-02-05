import React from "react";

export default function CallToAction({ onClick }) {
  return (
    <section className="cta-section">
      <button className="cta-button" onClick={onClick}>
        Call to Action
      </button>
    </section>
  );
}
