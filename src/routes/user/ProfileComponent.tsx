import React from "react";
import IconShare from "@/assets/icon-share.svg?react";
import IconMore from "@/assets/icon-more.svg?react";
import CustomButton from "@/components/CustomButton";

export default function ProfileComponent() {
  return (
    <div className="user-profile flex flex-col items-center gap-4">
      <div className="rounded-full w-24 h-24 overflow-hidden flex item-center justify-center">
        <img src="/dummy-profile.png" alt="" className="w-32 object-cover" />
      </div>

      <span className="text-xl font-bold">{"soyalatte"}</span>
      <div className="follow-info">
        <span>{`${4} followers`}</span> <span>{`${12} following`}</span>
      </div>
      <div className="buttons flex items-center gap-6">
        <IconShare />
        <CustomButton text={"Follow"} handleClick={() => {}} />
        <IconMore />
      </div>
    </div>
  );
}
