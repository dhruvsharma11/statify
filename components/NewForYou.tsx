import { blue } from "@mui/material/colors";
import { fontSize } from "@mui/system";
import React from "react";
import styles from "../styles/NewForYou.module.css";

const NewForYou = () => {
  return (
    <div className={styles.newforyou}>
      <div className={styles.title}>
        <p style={{ fontSize: 20, fontWeight: "bolder" }}>new for you:</p>
        <p style={{ paddingLeft: 2 }}>check out |artist's name|</p>
        <p style={{ paddingLeft: 2 }}>single: |song name|</p>
        <button type="button" className="btn btn-dark">
          listen now
        </button>
      </div>
    </div>
  );
};

export default NewForYou;
