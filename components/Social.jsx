"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ReggieDuran",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/reggie-duran-20bb80156/",
  },
  //   { icon: <FaYoutube />, path: "" },
  //   { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
      {/* <GetGithubContributions username="ReggieDuran" /> */}
    </div>
  );
};

export default Social;
