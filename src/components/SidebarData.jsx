import React from "react";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";

export const SidebarData = [
  {
    title: "News Feed",
    icon: <NewspaperOutlinedIcon />,
    link: "/",
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveOutlinedIcon />,
    link: "/notifications",
  },
  {
    title: "Messages",
    icon: <ForumOutlinedIcon />,
    link: "/messages",
  },
  {
    title: "Friends",
    icon: <GroupOutlinedIcon />,
    link: "/friends",
  },
  {
    title: "Weather",
    icon: <WbSunnyOutlinedIcon />,
    link: "/weather",
  },
  {
    title: "Login",
    icon: <PersonOutlineOutlinedIcon />,
    link: "/login",
  },
  {
    title: "Register",
    icon: <AppRegistrationOutlinedIcon />,
    link: "/register",
  },
];
