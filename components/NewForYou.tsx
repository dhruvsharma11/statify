import React from "react";
import styles from "../styles/NewForYou.module.css";
import styles2 from "../styles/Songchart.module.css";
import albumImage from "../public/swiftAlbum.png";
import { Button } from "react-bootstrap";

const NewForYou = () => {
  return (
    <div className={styles.newforyou}>
      <div className={styles.row}>
        <div className={styles.column}>
          <p style={{ fontSize: 20, fontWeight: "bolder" }}>new for you:</p>
          <p>check out |artist's name|</p>
          <p>single: |song name|</p>
          <Button variant="dark" className={styles2.btn} style={{ width: 200 }}>
            listen now
          </Button>
        </div>
        <img src={albumImage.src} className={styles["album-img"]} />
      </div>
    </div>
  );
};

export default NewForYou;
