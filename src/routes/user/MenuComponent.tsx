import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import IconHeart from "@/assets/icon-heart.svg?react";
type Props = {
  tab: string;
};

export default function MenuComponent({ tab }: Props) {
  const location = useLocation();

  useEffect(() => {
    console.log("tab:", tab);
  }, [tab]);
  return (
    <div className="user-menu flex gap-4 item-center justify-center my-4">
      <Link
        to={`${location.pathname}?tab=bucket`}
        className={`w-24 mr-12 text-center rounded-lg no-underline text-inherit px-4 py-2 hover:no-underline focus:no-underline ${
          tab === "bucket" ? `bg-[#7758F6] text-white` : ``
        }`}
      >
        버킷
      </Link>
      <Link
        to={`${location.pathname}?tab=feed`}
        className={`w-36 text-center rounded-lg no-underline text-inherit px-4 py-2 hover:no-underline focus:no-underline flex items-center gap-2 ${
          tab === "feed" ? `bg-[#7758F6] text-white` : ``
        }`}
      >
        <IconHeart />
        <span> 찜한 버킷</span>
      </Link>
    </div>
  );
}
