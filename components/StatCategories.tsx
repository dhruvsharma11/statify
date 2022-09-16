import React, { useState, Dispatch, SetStateAction } from "react";
import TopSong, { track } from "./TopSong";
import styles from "../styles/Songchart.module.css";

export var category = "name";

const StatCategories = ({
  songs,
  setSongs,
}: {
  songs: track[];
  setSongs: Dispatch<SetStateAction<track[]>>;
}) => {
  return (
    <div>
      <strong style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        what's up with you?
      </strong>
      <div className={styles["text-align"]}>
        <p className={styles["btn"]} onClick={() => (category = "name")}>
          your top songs
        </p>
        <p className={styles["btn"]} onClick={() => (category = "album.name")}>
          your top albums
        </p>
        <p
          className={styles["btn"]}
          onClick={() => (category = "artists.name")}
        >
          your top artists
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {songs.map((track: track) => (
          <TopSong track={track} />
        ))}
      </div>
    </div>
  );
};

export default StatCategories;
