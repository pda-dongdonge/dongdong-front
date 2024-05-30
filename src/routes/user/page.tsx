import { useEffect, useState } from "react";
import ProfileComponent from "./ProfileComponent";
import MenuComponent from "./MenuComponent";
import BucketListComponent from "./BucketListComponent";
import { useLocation, useParams } from "react-router-dom";
import useUser from "@/hooks/useUser";
import { IUserProfile } from "@/apis/userAPI";
import CreateBucket from "@/components/CreateBucket/CreateBucket";

//userId 를 queary로 받아서 user bucket list, user info 노출 (user following follower), 좋아요한 버킷list
export default function UserPage() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const [userprofileInfo, setUserProfileInfo] = useState<
    IUserProfile | undefined
  >();
  const tab = queryParams.get("tab") || "bucket";
  const { userId } = useParams();
  const [currentTab, setCurrentTab] = useState(tab);
  const { getUserProfile } = useUser();
  const [createShow, setCreateShow] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean | string>(true);

  function handleShow(breakpoint: boolean | string) {
    setFullscreen(breakpoint);
    console.log("g2");
    setCreateShow(true);
  }

  useEffect(() => {
    setCurrentTab(tab);
  }, [tab]);
  useEffect(() => {
    async function init() {
      if (userId) {
        const res = await getUserProfile(userId);
        setUserProfileInfo(res);
      }
    }
    init();
  }, []);

  return (
    <>
      <CreateBucket
        show={createShow}
        fullScreen={fullscreen}
        onHide={() => setCreateShow(false)}
      />
      <div className="userPage basis-0 shrink grow flex-col">
        <ProfileComponent
          userInfo={userprofileInfo}
          setUserInfo={setUserProfileInfo}
        />
        <MenuComponent tab={currentTab} />
        <BucketListComponent
          tab={currentTab}
          goToBucketCreate={() => handleShow(true)}
        />
      </div>
    </>
  );
}
