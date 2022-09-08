import React from "react";
import styles from "../styles/weekly.module.css";

const LoginBox = () => {
  return (
    <div>
      <p className={styles.weeklyone}>
        {" "}
        <span className={styles.bigger}>11</span> different artists
      </p>
      <p className={styles.weeklytwo}>
        {" "}
        <span className={styles.bigger}>4</span> different genres
      </p>
      <p className={styles.weeklythree}>
        {" "}
        <span className={styles.bigger}>0</span> different podcasts
      </p>
    </div>
  );
};

export default LoginBox;
