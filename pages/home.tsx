import type { NextPage } from "next";
import Sidebar from "../components/SideBar";
import Profile from "../components/Profile";
import Currently from "../components/Currently";
import Graph from "../components/Graph";
import Weekly from "../components/Weekly";
import NewForYou from "../components/NewForYou";
import StatCategories from "../components/StatCategories";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { track } from "../components/TopSong";

const Home: NextPage = () => {
  const [songs, setsongs] = useState<track[]>([]);
  const { data: session } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const queryParamsTrack = new URLSearchParams({ term: "short_term" });
      const resp = await fetch(
        "/api/getTopTracks?" + queryParamsTrack.toString()
      );
      const data = await resp.json();
      setsongs([...data.items]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Home | Statify</title>
      </Head>

      <div className="dashboard">
        <Sidebar />
        <div className="grid-container">
          <div className="left-component">
            {session === undefined ? (
              <Profile user={"spotify name"} pfp={"/profilePicture.jfif"} />
            ) : (
              <Profile
                user={session!.user?.name as string}
                pfp={session!.user?.image as string}
              />
            )}
            <Weekly />
            <StatCategories songs={songs} setSongs={setsongs} />
          </div>
          <div className="right-component">
            <Currently />
            <Graph />
            <NewForYou />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
