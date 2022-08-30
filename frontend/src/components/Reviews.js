import React from "react";
import Review from "./Review";
import "../styles/Review.css";

function Reviews() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Nuestros huespedes opinan</h2><br/>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    </main>
  );
}

export default Reviews;
