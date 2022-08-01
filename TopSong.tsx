import React from "react";
import { Button } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/Songchart.module.css";
import { AiFillClockCircle } from "react-icons/ai";
import { AiFillFire } from "react-icons/ai";

interface playLartist {
  external_urls: external_url;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface external_url {
  spotify: string;
}

interface album {
  album_type: string;
  artists: playLartist[];
  available_markets: string[];
  external_urls: external_url;
  href: string;
  id: string;
  images: image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: {
    reason: string;
  };
  total_tracks: number;
  type: string;
  uri: string;
}

interface image {
  height: number;
  url: string;
  width: number;
}

export interface artist {
  external_urls: external_url;
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface track {
  album: album;
  artists: playLartist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: external_url;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface playlistItem {
  track: track;
  played_at: string;
  context: {
    external_urls: external_url;
    href: string;
    type: string;
    uri: string;
  };
}

//track.artists.map((artist) => artist.name).join()

const TopSong = ({ track }: { track: track }) => {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={track.album.images[0].url} height={65} width={65} />
      </div>
      <div className={styles["song-info"]}>
        <strong>{track.name}</strong>
        <span>{track.artists[0].name}</span>
      </div>
      <div className={styles["stats-info"]}>
        <p>
          <AiFillClockCircle size={20} style={{ marginRight: "-0.25rem" }} />
          Hours Listened
        </p>
        <p>
          <AiFillFire size={18} style={{ marginRight: "-0.25rem" }} />
          Rank
        </p>
        <Button
          variant="dark"
          className={styles.btn}
          href={track.external_urls.spotify}
          target="_blank"
        >
          listen now
        </Button>
      </div>
    </div>
  );
};

export default TopSong;
