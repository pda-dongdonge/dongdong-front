import { useEffect } from "react";
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
        className={`w-24 mr-12 text-center no-underline text-inherit px-2 py-2 hover:no-underline focus:no-underline ${
          tab === "bucket" ? `border-b-4 border-solid border-indigo-500 ` : ``
        }`}
      >
        버킷
      </Link>
      <Link
        to={`${location.pathname}?tab=feed`}
        className={`w-32 text-center no-underline text-inherit px-2 py-2 hover:no-underline focus:no-underline flex justify-center gap-2 ${
          tab === "feed" ? `border-b-4 border-solid border-indigo-500 ` : ``
        }`}
      >
        <IconHeart />
        <span> 찜한 버킷</span>
      </Link>
    </div>
  );
}
