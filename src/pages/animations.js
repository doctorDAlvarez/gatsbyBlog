import React from "react";
import Layout from "../components/layout";
import video from "../images/screen.mp4";
import snippet from "../images/code.png";

export default function Animations() {
  return (
    <div>
      <Layout>
        <h4>react-spring library</h4>
        <div
          style={{
            display: "flex",
            margin: "auto",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <div>
            <video width="300" height="300" src={video} controls></video>
          </div>
          <div>
            <img width="300" height="300" src={snippet} alt="a" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
