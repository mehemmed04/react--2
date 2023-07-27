import React from "react";

export default function Cinema({ cinema }) {
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        background: "orange",
        margin: "0px",
        padding: "0px 0px 10px 0px",
      }}
    >
      <img
        style={{
          width: "70px",
          marginTop: "0px",
          marginRight: "10px",
          marginLeft: "10px",
          padding: "10px",
          display: "inline-block",
        }}
        src={cinema.avatar}
        alt="cinema logo"
      ></img>
      <section
        style={{
          display: "inline-block",
          textAlign: "center",
          marginLeft: "300px",
          height: "70px",
        }}
      >
        <h1
          style={{
            display: "inline-block",
          }}
        >
          Welcome to official website of {cinema.name}
        </h1>
      </section>

      <section
        style={{
          float: "right",
          marginLeft: "15px",
        }}
      >
        <h1
          style={{
            marginRight: "15px",
          }}
        >
          Our address: {cinema.address}
        </h1>
        <h3
          style={{
            marginRight: "15px",
          }}
        >
          Rating: {cinema.rating}
        </h3>
      </section>
    </div>
  );
}
