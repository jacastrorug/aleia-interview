import React from "react";
import "./styles.css";

export default function Loading() {
  return (
    <main className="preloader">
      <section className="loading-lines">
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
        <span className="line line-4"></span>
        <span className="line line-5"></span>
        <span className="line line-6"></span>
        <span className="line line-7"></span>
        <span className="line line-8"></span>
      </section>
      <section>Loading</section>
    </main>
  );
}
