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
          <div className={styles.column}>
            <Image
              src={albumImage}
              style={{
                paddingLeft: 20,
                paddingTop: 20,
                paddingBottom: 20,
                paddingRight: 20,
                borderRadius: 30,
              }}
              width="50"
              height="150"
            />
          </div>

          <div className={styles.doublecolumn}>
            <p
              className="nameLine"
              style={{
                paddingLeft: 100,
                paddingTop: 10,
                fontWeight: "bold",
                margin: 5,
              }}
            >
              |song name|
            </p>
            <p className="nameLine" style={{ paddingLeft: 100 }}>
              |artist's name|
            </p>

            <div
              className="playLine"
              style={{ paddingLeft: 80, paddingTop: 15 }}
            >
              <BsSkipBackwardFill
                style={{ width: 25, height: 25, margin: 10 }}
              />{" "}
              <AiOutlinePause style={{ width: 25, height: 25, margin: 10 }} />
              <BsSkipForwardFill
                style={{ width: 25, height: 25, margin: 10 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currently;
