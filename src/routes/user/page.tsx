import React from "react";
import ProfileComponent from "./ProfileComponent";
import MenuComponent from "./MenuComponent";
import BucketListComponent from "./BucketListComponent";

//userId 를 queary로 받아서 user bucket list, user info 노출 (user following follower), 좋아요한 버킷list
export default function UserPage() {
  return (
    <div className="userPage">
      <ProfileComponent />
      <MenuComponent />
      <BucketListComponent />
    </div>
  );
}
