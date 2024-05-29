import userAPI, { IUserProfile } from "@/apis/userAPI";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const { VITE_BASE_URL } = import.meta.env;
export default function useUser() {
  const service = new userAPI(VITE_BASE_URL + "userprofile");
  const user = useSelector((state: RootState) => state.user);
  async function getUserProfile(userId: string): Promise<IUserProfile> {
    try {
      const res = await service.getUserProfile(userId);
      console.log("userPRofile:", res);
      return res;
    } catch (err) {
      console.log("Error to signup", err);
      return {
        userId: "",
        followers: [],
        following: [],
        likedBucket: [],
        username: "",
        followersCount: 0,
        followingCount: 0,
        isFollow: false,
      };
    }
  }

  async function follow() {
    if (!user._id) {
      return console.log("로그인하세요");
    }
    const res = await service.follow({ userId: user._id, follow: true });
    if (res) return true;
    return false;
  }

  async function unFollow() {
    if (!user._id) {
      return console.log("로그인하세요");
    }
    const res = await service.follow({ userId: user._id, follow: false });
    if (res) return true;
    return false;
  }

  return { getUserProfile, follow, unFollow };
}
