import React from "react";
import IconShare from "@/assets/icon-share.svg?react";
import IconMore from "@/assets/icon-more.svg?react";
import CustomButton from "@/components/CustomButton";
import { IUserProfile } from "@/apis/userAPI";
type Props = {
  userInfo: IUserProfile | undefined;
};
export default function ProfileComponent({ userInfo }: Props) {
  return (
    userInfo && (
      <div className="user-profile flex flex-col items-center gap-4">
        <div className="rounded-full w-24 h-24 overflow-hidden flex item-center justify-center">
          <img src="/dummy-profile.png" alt="" className="w-32 object-cover" />
        </div>

        <span className="text-xl font-bold">{userInfo.username}</span>
        <div className="follow-info">
          <span>{`${userInfo.followersCount} followers`}</span>{" "}
          <span>{`${userInfo.followingCount} following`}</span>
        </div>
        <div className="buttons flex items-center gap-6">
          <IconShare />
          <CustomButton text={"Follow"} handleClick={() => {}} />
          <IconMore />
        </div>
      </div>
    )
  );
}
