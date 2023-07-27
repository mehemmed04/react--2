import React from "react";

export default function Feedback({ feedback }) {
  return (
    <div>
      <div>
        <section>
          <section
            style={{
              display: "inline-block",
            }}
          >
            <img
              style={{
                width: "100px",
                height: "100px",
              }}
              src={feedback.avatar}
              alt="pp"
            ></img>
          </section>
          <section
            style={{
              display: "inline-block",
              width: "80%",
              background: "orange",

              marginLeft: "5px",
              marginBottom: "10px",
            }}
          >
            <h1
              style={{
                marginTop: "0px",
              }}
            >
              @{feedback.username}
            </h1>
            <h3>{feedback.content}</h3>
          </section>
        </section>
      </div>
    </div>
  );
}
