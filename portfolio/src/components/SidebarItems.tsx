import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

export const SidebarItems = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "Skill",
    icon: <AutoAwesomeIcon />,
    link: "/skill"
  },
  {
    title: "Contact",
    icon: <AlternateEmailIcon />,
    link: "/contact"
  }
];
