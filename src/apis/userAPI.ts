import { BaseApi } from "./baseAPI";

export interface IFollow {
  userId: string;
  follow: boolean;
}

export interface IUserProfile {
  userId: string;
  followers: string[];
  following: string[];
  likedBucket: string[];
  username: string;
  followersCount: number;
  followingCount: number;
  isFollow: boolean; //현재 팔로우상태. 비로그인 유저는 false
}
// router.get("/userprofile/:userId");
// router.post("/userprofile/follow/:userId");
export default class userAPI extends BaseApi {
  async getUserProfile(userId: string) {
    try {
      const resp = await this.fetcher.get(`/${userId}`);
      return resp.data;
    } catch {
      console.log("fail to get user Profile");
    }
  }
  // follow: true = 팔로우할게요. follow:false = 언팔할게요.
  async follow({ userId, follow }: IFollow) {
    try {
      await this.fetcher.post(`/follow/${userId}`, {
        follow,
      });
      return true;
    } catch {
      console.log("fail to follow");
    }
  }
}
