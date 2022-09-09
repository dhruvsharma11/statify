import React from "react";
import styles from "../styles/currently.module.css";
import Image from "next/image";
import albumImage from "../public/swiftAlbum.png";
import { AiOutlinePause } from "react-icons/ai";
import { BsSkipBackwardFill } from "react-icons/bs";
import { BsSkipForwardFill } from "react-icons/bs";

const Currently = () => {
  return (
    <div>
      <p style={{ fontSize: 20, fontWeight: "bold" }}>
        {" "}
        currently listening to 🎧:
      </p>
      <div className={styles.currently}>
        <div className={styles.row}>
          <img src={albumImage.src} className={styles["album-img"]} />

          <div className={styles.player}>
            <div className={styles.doublecolumn}>
              <p className="nameLine" style={{ fontWeight: "bold" }}>
                |song name|
              </p>
              <p className="nameLine">|artist's name|</p>
              <div className="playLine">
                <BsSkipBackwardFill
                  style={{ width: 25, height: 25, margin: 10 }}
                />
                <AiOutlinePause style={{ width: 25, height: 25, margin: 10 }} />
                <BsSkipForwardFill
                  style={{ width: 25, height: 25, margin: 10 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currently;
