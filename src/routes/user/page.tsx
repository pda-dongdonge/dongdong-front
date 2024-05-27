import React, { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";
import MenuComponent from "./MenuComponent";
import BucketListComponent from "./BucketListComponent";
import { useLocation } from "react-router-dom";

//userId 를 queary로 받아서 user bucket list, user info 노출 (user following follower), 좋아요한 버킷list
export default function UserPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab") || "bucket";
  const [currentTab, setCurrentTab] = useState(tab);
  useEffect(() => {
    setCurrentTab(tab);
  }, [tab]);

  return (
    <div className="userPage basis-0 shrink grow flex-col">
      <ProfileComponent />
      <MenuComponent tab={currentTab} />
      <BucketListComponent tab={currentTab} />
    </div>
  );
}
