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
    link: "/social_media",
  },
  {
    title: "Notifications",
    icon: <NotificationsActiveOutlinedIcon />,
    link: "/social_media/notifications",
  },
  {
    title: "Messages",
    icon: <ForumOutlinedIcon />,
    link: "/social_media/messages",
  },
  {
    title: "Friends",
    icon: <GroupOutlinedIcon />,
    link: "/social_media/friends",
  },
  {
    title: "Weather",
    icon: <WbSunnyOutlinedIcon />,
    link: "/social_media/weather",
  },
  {
    title: "Login",
    icon: <PersonOutlineOutlinedIcon />,
    link: "/social_media/login",
  },
  {
    title: "Register",
    icon: <AppRegistrationOutlinedIcon />,
    link: "/social_media/register",
  },
];
