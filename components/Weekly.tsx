import React from "react";
import styles from "../styles/weekly.module.css";

const Weekly = () => {
  return (
    <div className={styles.weekly}>
      <p className={styles["weekly-box"]}>
        <span className={styles.bigger}>11</span> different artists
      </p>
      <p className={styles["weekly-box"]}>
        <span className={styles.bigger}>4</span> different genres
      </p>
      <p className={styles["weekly-box"]}>
        <span className={styles.bigger}>0</span> different podcasts
      </p>
    </div>
  );
};

export default Weekly;
