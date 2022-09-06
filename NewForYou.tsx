import React from "react";
import styles from "../styles/NewForYou.module.css";
import Image from "next/image";
import albumImage from "../public/swiftAlbum.png";

const NewForYou = () => {
  return (
    <div className={styles.newforyou}>
      <div className={styles.row}>
        <div className={styles.column}>
          <p
            style={{
              fontSize: 20,
              fontWeight: "bolder",
              paddingLeft: 10,
              paddingTop: 10,
            }}
          >
            new for you:
          </p>
          <p style={{ paddingLeft: 20 }}>check out |artist's name|</p>
          <p style={{ paddingLeft: 20 }}>single: |song name|</p>
          <button
            type="button"
            className="btn btn-dark"
            style={{ width: 200, marginLeft: 10 }}
          >
            listen now
          </button>
        </div>
        <div className={styles.column}>
          <Image
            src={albumImage}
            style={{
              paddingLeft: 20,
              paddingTop: 20,
              paddingBottom: 20,
              paddingRight: 20,
            }}
            width="50"
            height="200"
          />
        </div>
      </div>
    </div>
  );
};

export default NewForYou;
