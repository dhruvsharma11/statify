import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { TbLetterS } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

export const SideBarData = [
  {
    icon: <TbLetterS size={"50px"} />,
    link: "/home",
  },
  {},
  {
    //title: "",
    icon: <FaHome size={"25px"} />,
    link: "/home",
  },
  {
    //title: "Profile",
    icon: <FaUserCircle size={"25px"} />,
    link: "/home",
  },
  {
    //title: "Settings",
    icon: <FiSettings size={"25px"} />,
    link: "/home",
  },
  {},
  {
    //title: "",
    icon: <FiLogOut size={"25px"} />,
    link: "/home",
  },
];
