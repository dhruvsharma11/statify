import React from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Profile = ({ user, pfp }: { user: string; pfp: string }) => {
  console.log(pfp);
  return (
    <div className={styles.card}>
      <div>
        <div className={styles["icon-text"]}>
          <h2 className={styles.title}>hello {user} </h2>
          <Image src="/waving.png" height={30} width={30}></Image>
        </div>
        <span>It's good to see you again.</span>
      </div>
      <img
        className={styles.img}
        src={pfp}
        height={120}
        width={120}
        alt="User's profile picture"
      />
    </div>
  );
};

export default Profile;
