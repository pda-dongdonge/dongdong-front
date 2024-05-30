import IconShare from "@/assets/icon-share.svg?react";
import IconMore from "@/assets/icon-more.svg?react";
import CustomButton from "@/components/CustomButton";
import { IUserProfile } from "@/apis/userAPI";
import useUser from "@/hooks/useUser";
import { useAuth } from "@/hooks/useAuth";
import { showToast } from "@/store/toastPopup";
import { useDispatch } from "react-redux";

type Props = {
  userInfo: IUserProfile | undefined;
  setUserInfo: (userInfo: IUserProfile) => void;
};
export default function ProfileComponent({ userInfo, setUserInfo }: Props) {
  const { user } = useAuth();
  const { follow, unFollow } = useUser();
  const dispatch = useDispatch();
  const copyToClipboard = async (e): Promise<void> => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(window.location.href);
      const toastId = Date.now();
      dispatch(showToast({ id: toastId, message: "copied!" }));
      // setTimeout(()=>{
      //   dispatch(removeToast(toastId))
      // }, 2000)
    } catch (error) {
      alert("failed");
    }
  };
  const handleFollow = async () => {
    if (!userInfo) return;
    //TODO: 비로그인 유저면 로그인 유도(로그인이 필요합니다)팝업 띄우고 확인시 로그인창 이동
    if (!user._id) {
      console.log("TODO: 로그인 필요! 팝업 띄우기", user);
      return;
    }
    //팔로우상태면 언팔, 언팔상태면 팔로우
    if (userInfo.isFollow) {
      const res = await unFollow(userInfo.userId);
      setUserInfo(res);
    } else {
      const res = await follow(userInfo.userId);
      setUserInfo(res);
    }
  };

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
          <IconShare
            className="cursor-pointer"
            onClick={(e) => copyToClipboard(e)}
          />
          {userInfo.userId !== user._id && (
            <CustomButton
              text={`${userInfo.isFollow ? "Unfollow" : "Follow"}`}
              handleClick={handleFollow}
            />
          )}
          <IconMore className="cursor-pointer" />
        </div>
      </div>
    )
  );
}
