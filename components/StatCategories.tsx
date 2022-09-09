import React, { useState } from "react";
import TopSong from "./TopSong";
import styles from "../styles/Songchart.module.css";

const data = [
  {
    album: {
      album_type: "SINGLE",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
          },
          href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
          id: "2PSJ6YriU7JsFucxACpU7Y",
          name: "CHUNG HA",
          type: "artist",
          uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
          },
          href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
          id: "3zDRCqOhJXJfS2YWOEwGMC",
          name: "Christopher",
          type: "artist",
          uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
        },
      ],
      available_markets: [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/4IRuxkSbw7iZZmnr6Rly2Q",
      },
      href: "https://api.spotify.com/v1/albums/4IRuxkSbw7iZZmnr6Rly2Q",
      id: "4IRuxkSbw7iZZmnr6Rly2Q",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27390ee0d4d3906192283bae657",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0290ee0d4d3906192283bae657",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485190ee0d4d3906192283bae657",
          width: 64,
        },
      ],
      name: "Bad Boy",
      release_date: "2020-09-23",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:4IRuxkSbw7iZZmnr6Rly2Q",
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
        },
        href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
        id: "2PSJ6YriU7JsFucxACpU7Y",
        name: "CHUNG HA",
        type: "artist",
        uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
        },
        href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
        id: "3zDRCqOhJXJfS2YWOEwGMC",
        name: "Christopher",
        type: "artist",
        uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
      },
    ],
    available_markets: [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CA",
    ],
    disc_number: 1,
    duration_ms: 182586,
    explicit: false,
    external_ids: {
      isrc: "DKAZA2000205",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/1WCOna34eEMPgjfOOZkGQc",
    },
    href: "https://api.spotify.com/v1/tracks/1WCOna34eEMPgjfOOZkGQc",
    id: "1WCOna34eEMPgjfOOZkGQc",
    is_local: false,
    name: "Bad Boy",
    popularity: 59,
    preview_url:
      "https://p.scdn.co/mp3-preview/4a5d3c19a1ff8b656678972268836044675caa80?cid=7b0a687f57bc40b1a25035927985a20b",
    track_number: 1,
    type: "track",
    uri: "spotify:track:1WCOna34eEMPgjfOOZkGQc",
  },
  {
    album: {
      album_type: "SINGLE",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
          },
          href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
          id: "2PSJ6YriU7JsFucxACpU7Y",
          name: "CHUNG HA",
          type: "artist",
          uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
          },
          href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
          id: "3zDRCqOhJXJfS2YWOEwGMC",
          name: "Christopher",
          type: "artist",
          uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
        },
      ],
      available_markets: [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/4IRuxkSbw7iZZmnr6Rly2Q",
      },
      href: "https://api.spotify.com/v1/albums/4IRuxkSbw7iZZmnr6Rly2Q",
      id: "4IRuxkSbw7iZZmnr6Rly2Q",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27390ee0d4d3906192283bae657",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0290ee0d4d3906192283bae657",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485190ee0d4d3906192283bae657",
          width: 64,
        },
      ],
      name: "Bad Boy",
      release_date: "2020-09-23",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:4IRuxkSbw7iZZmnr6Rly2Q",
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
        },
        href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
        id: "2PSJ6YriU7JsFucxACpU7Y",
        name: "CHUNG HA",
        type: "artist",
        uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
        },
        href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
        id: "3zDRCqOhJXJfS2YWOEwGMC",
        name: "Christopher",
        type: "artist",
        uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
      },
    ],
    available_markets: [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CA",
    ],
    disc_number: 1,
    duration_ms: 182586,
    explicit: false,
    external_ids: {
      isrc: "DKAZA2000205",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/1WCOna34eEMPgjfOOZkGQc",
    },
    href: "https://api.spotify.com/v1/tracks/1WCOna34eEMPgjfOOZkGQc",
    id: "1WCOna34eEMPgjfOOZkGQc",
    is_local: false,
    name: "Bad Boy",
    popularity: 59,
    preview_url:
      "https://p.scdn.co/mp3-preview/4a5d3c19a1ff8b656678972268836044675caa80?cid=7b0a687f57bc40b1a25035927985a20b",
    track_number: 1,
    type: "track",
    uri: "spotify:track:1WCOna34eEMPgjfOOZkGQc",
  },
  {
    album: {
      album_type: "SINGLE",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
          },
          href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
          id: "2PSJ6YriU7JsFucxACpU7Y",
          name: "CHUNG HA",
          type: "artist",
          uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
          },
          href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
          id: "3zDRCqOhJXJfS2YWOEwGMC",
          name: "Christopher",
          type: "artist",
          uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
        },
      ],
      available_markets: [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/4IRuxkSbw7iZZmnr6Rly2Q",
      },
      href: "https://api.spotify.com/v1/albums/4IRuxkSbw7iZZmnr6Rly2Q",
      id: "4IRuxkSbw7iZZmnr6Rly2Q",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27390ee0d4d3906192283bae657",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0290ee0d4d3906192283bae657",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485190ee0d4d3906192283bae657",
          width: 64,
        },
      ],
      name: "Bad Boy",
      release_date: "2020-09-23",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:4IRuxkSbw7iZZmnr6Rly2Q",
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
        },
        href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
        id: "2PSJ6YriU7JsFucxACpU7Y",
        name: "CHUNG HA",
        type: "artist",
        uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
        },
        href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
        id: "3zDRCqOhJXJfS2YWOEwGMC",
        name: "Christopher",
        type: "artist",
        uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
      },
    ],
    available_markets: [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CA",
    ],
    disc_number: 1,
    duration_ms: 182586,
    explicit: false,
    external_ids: {
      isrc: "DKAZA2000205",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/1WCOna34eEMPgjfOOZkGQc",
    },
    href: "https://api.spotify.com/v1/tracks/1WCOna34eEMPgjfOOZkGQc",
    id: "1WCOna34eEMPgjfOOZkGQc",
    is_local: false,
    name: "Bad Boy",
    popularity: 59,
    preview_url:
      "https://p.scdn.co/mp3-preview/4a5d3c19a1ff8b656678972268836044675caa80?cid=7b0a687f57bc40b1a25035927985a20b",
    track_number: 1,
    type: "track",
    uri: "spotify:track:1WCOna34eEMPgjfOOZkGQc",
  },
  {
    album: {
      album_type: "SINGLE",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
          },
          href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
          id: "2PSJ6YriU7JsFucxACpU7Y",
          name: "CHUNG HA",
          type: "artist",
          uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
          },
          href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
          id: "3zDRCqOhJXJfS2YWOEwGMC",
          name: "Christopher",
          type: "artist",
          uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
        },
      ],
      available_markets: [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/4IRuxkSbw7iZZmnr6Rly2Q",
      },
      href: "https://api.spotify.com/v1/albums/4IRuxkSbw7iZZmnr6Rly2Q",
      id: "4IRuxkSbw7iZZmnr6Rly2Q",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27390ee0d4d3906192283bae657",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0290ee0d4d3906192283bae657",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485190ee0d4d3906192283bae657",
          width: 64,
        },
      ],
      name: "Bad Boy",
      release_date: "2020-09-23",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:4IRuxkSbw7iZZmnr6Rly2Q",
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
        },
        href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
        id: "2PSJ6YriU7JsFucxACpU7Y",
        name: "CHUNG HA",
        type: "artist",
        uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
        },
        href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
        id: "3zDRCqOhJXJfS2YWOEwGMC",
        name: "Christopher",
        type: "artist",
        uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
      },
    ],
    available_markets: [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CA",
    ],
    disc_number: 1,
    duration_ms: 182586,
    explicit: false,
    external_ids: {
      isrc: "DKAZA2000205",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/1WCOna34eEMPgjfOOZkGQc",
    },
    href: "https://api.spotify.com/v1/tracks/1WCOna34eEMPgjfOOZkGQc",
    id: "1WCOna34eEMPgjfOOZkGQc",
    is_local: false,
    name: "Bad Boy",
    popularity: 59,
    preview_url:
      "https://p.scdn.co/mp3-preview/4a5d3c19a1ff8b656678972268836044675caa80?cid=7b0a687f57bc40b1a25035927985a20b",
    track_number: 1,
    type: "track",
    uri: "spotify:track:1WCOna34eEMPgjfOOZkGQc",
  },
  {
    album: {
      album_type: "SINGLE",
      artists: [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
          },
          href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
          id: "2PSJ6YriU7JsFucxACpU7Y",
          name: "CHUNG HA",
          type: "artist",
          uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
        },
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
          },
          href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
          id: "3zDRCqOhJXJfS2YWOEwGMC",
          name: "Christopher",
          type: "artist",
          uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
        },
      ],
      available_markets: [
        "AD",
        "AE",
        "AR",
        "AT",
        "AU",
        "BE",
        "BG",
        "BH",
        "BO",
        "BR",
      ],
      external_urls: {
        spotify: "https://open.spotify.com/album/4IRuxkSbw7iZZmnr6Rly2Q",
      },
      href: "https://api.spotify.com/v1/albums/4IRuxkSbw7iZZmnr6Rly2Q",
      id: "4IRuxkSbw7iZZmnr6Rly2Q",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab67616d0000b27390ee0d4d3906192283bae657",
          width: 640,
        },
        {
          height: 300,
          url: "https://i.scdn.co/image/ab67616d00001e0290ee0d4d3906192283bae657",
          width: 300,
        },
        {
          height: 64,
          url: "https://i.scdn.co/image/ab67616d0000485190ee0d4d3906192283bae657",
          width: 64,
        },
      ],
      name: "Bad Boy",
      release_date: "2020-09-23",
      release_date_precision: "day",
      total_tracks: 1,
      type: "album",
      uri: "spotify:album:4IRuxkSbw7iZZmnr6Rly2Q",
    },
    artists: [
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/2PSJ6YriU7JsFucxACpU7Y",
        },
        href: "https://api.spotify.com/v1/artists/2PSJ6YriU7JsFucxACpU7Y",
        id: "2PSJ6YriU7JsFucxACpU7Y",
        name: "CHUNG HA",
        type: "artist",
        uri: "spotify:artist:2PSJ6YriU7JsFucxACpU7Y",
      },
      {
        external_urls: {
          spotify: "https://open.spotify.com/artist/3zDRCqOhJXJfS2YWOEwGMC",
        },
        href: "https://api.spotify.com/v1/artists/3zDRCqOhJXJfS2YWOEwGMC",
        id: "3zDRCqOhJXJfS2YWOEwGMC",
        name: "Christopher",
        type: "artist",
        uri: "spotify:artist:3zDRCqOhJXJfS2YWOEwGMC",
      },
    ],
    available_markets: [
      "AD",
      "AE",
      "AR",
      "AT",
      "AU",
      "BE",
      "BG",
      "BH",
      "BO",
      "BR",
      "CA",
    ],
    disc_number: 1,
    duration_ms: 182586,
    explicit: false,
    external_ids: {
      isrc: "DKAZA2000205",
    },
    external_urls: {
      spotify: "https://open.spotify.com/track/1WCOna34eEMPgjfOOZkGQc",
    },
    href: "https://api.spotify.com/v1/tracks/1WCOna34eEMPgjfOOZkGQc",
    id: "1WCOna34eEMPgjfOOZkGQc",
    is_local: false,
    name: "Bad Boy",
    popularity: 59,
    preview_url:
      "https://p.scdn.co/mp3-preview/4a5d3c19a1ff8b656678972268836044675caa80?cid=7b0a687f57bc40b1a25035927985a20b",
    track_number: 1,
    type: "track",
    uri: "spotify:track:1WCOna34eEMPgjfOOZkGQc",
  },
];

const StatCategories = () => {
  const [songs, setsongs] = useState([...data]);
  return (
    <div>
      <strong style={{ fontSize: "1.5rem", fontWeight: 700 }}>
        what's up with you?
      </strong>
      <div className={styles["text-align"]}>
        <p className={styles["btn"]}>your top songs</p>
        <p className={styles["btn"]}>your top albums</p>
        <p className={styles["btn"]}>your top artists</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
        {songs.map((song: any) => (
          <TopSong track={song} />
        ))}
      </div>
    </div>
  );
};

export default StatCategories;
