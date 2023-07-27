import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div
      style={{
        display: "inline",
      }}
    >
      <div
        style={{
          width: "30%",
          margin: "10px",

          textAlign: "center",
          border: "2px solid gray",
          display: "inline-block",
          background: "deepskyblue",
          borderRadius: "10px",
        }}
      >
        <section style={{ display: "flex" }}>
          <img
            style={{
              width: "100px",
              height: "100px",
              margin: "10px",
              marginBottom: "0px",
              display: "inline-block",
            }}
            src={movie.src}
            alt="product"
          ></img>
          <h2
            style={{
              marginLeft: "10px",
              marginBottom: "30px",
            }}
          >
            {movie.name}
          </h2>
          <h3
            style={{
              marginTop: "25px",
              marginLeft: "10px",
            }}
          >
            {movie.director}
          </h3>
        </section>
        <h3
          style={{
            float: "left",
            display: "inline-block",
            color: "gold",
            marginLeft: "10px",
          }}
        >
          Rating: {movie.rating}
        </h3>
        <h3
          style={{
            float: "left",
            marginLeft: "15px",
            display: "inline-block",
            color: "red",
          }}
        >
          Description: {movie.description}
        </h3>
      </div>
    </div>
  );
}
