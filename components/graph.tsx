import React from "react";
import styles from "../styles/graph.module.css";
import Image from "next/image";
import graphImage from "../public/spotifyGraph.jpg";

const graph = () => {
  return (
    <div>
      <p style={{ fontSize: 22, fontWeight: "bold" }}> your weekly stats 🎶:</p>

      <p style={{ fontSize: 17, fontWeight: "bold" }}>
        {" "}
        hours spent listening :
      </p>

      <Image src={graphImage} width="449.6px" height="266.15px" />
    </div>
  );
};

export default graph;
