"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AvatarMenu = ({ profileImgSrc, actionUrl, actionLabel }) => {
  const [showMenu, setShowMenu] = useState(false);

  const ProfileMenu = () => {
    return (
      <div className="absolute mt-2 rounded-lg text-[80%] transition-all duration-300 shadow-md shadow-color-dark/30 divide-y divide-color-dark">
        <Link
          href="/users/dashboard"
          className="flex p-2 bg-color-primary hover:bg-color-accent rounded-t-lg transition-all duration-300"
        >
          Dashboard
        </Link>
        <Link
          href={actionUrl}
          className="flex p-2 bg-color-primary hover:bg-color-accent rounded-b-lg transition-all duration-300"
        >
          {actionLabel}
        </Link>
      </div>
    );
  };

  return (
    <button
      onClick={() => setShowMenu((previous) => !previous)}
      className="relative"
    >
      <Image
        src={profileImgSrc}
        width={40}
        height={40}
        alt="profile-image"
        className="rounded-full h-10 p-1 bg-color-primary hover:shadow-md shadow-color-dark/30 transition-all duration-300"
      />
      {showMenu ? (
        <div className={`${showMenu ? "block" : "hidden"} transition-all duration-300w`}>
          <ProfileMenu />
        </div>
      ) : null}
    </button>
  );
};

export default AvatarMenu;
