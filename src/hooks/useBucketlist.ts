// import { RootState } from "@reduxjs/toolkit/query";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import authAPI from "@/apis/authAPI";
import bucketlistAPI from "../apis/bucketlistAPI";
import { useAuth } from "@/hooks/useAuth";
const { VITE_BASE_URL } = import.meta.env;
export function useBucketlist() {
  //const user = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch();
  const service = new bucketlistAPI(VITE_BASE_URL + "bucket");
  const authService = new authAPI(VITE_BASE_URL + "auth");

  async function addBucket(title: string, contents: string) {
    try {
      const res = await service.postBucket(title, contents);
      if (res) {
        console.log("bucket post success")
        return true;
      } else {
        console.error("Login failed");
        return false;
      }
    } catch (err) {
      //복구
      console.log("Error to login", err);
      //실패 케이스에 따라 로그아웃 실패 노출(존재하지않는계정 )
    }
  }

  async function bringBucket(){
    try{
      const user = await authService.isLogin();
      const bucketService = await new bucketlistAPI(VITE_BASE_URL);

      const res=await bucketService.getUserProfileBuckets(user._id);
      
      if(res){
        console.log("bring buckets success");
        console.log("res", res)
        return res;
      }else{
        console.error("get failed");
        return false;
      
      }

    }catch(err){
      console.log("Error to bringBucket");
      return false;
    }
  }
  async function removeBucket(bucketId:string){
    try{
      await service.deleteBucket(bucketId);
    } catch (err) {
      console.log("Error", err);
    }
  }
  async function addUrl(url: string, urlContent: string, bucketID: string): Promise<{ success: boolean, message: string }> {
    try {
      const res = await service.postUrl(url, urlContent, bucketID);
      if (res) {
        console.log("URL post success");
        return { success: true, message: "URL post success" };
      } else {
        console.error("URL post failed");
        return { success: false, message: "URL post failed" };
      }
    } catch (err) {
      console.error("Error adding URL:", err);
      if (err.response && err.response.data && err.response.data.message) {
        return { success: false, message: err.response.data.message };
      } else {
        return { success: false, message: "An error occurred while adding the URL." };
      }
    }
  }
  
  
  
  async function addBucketItem(bucketId: string, bucketItemId: string): Promise<boolean> {
    try {
      const res = await service.saveBucketItem(bucketId, bucketItemId);
      if(res){
        console.log("bucket item save success");
        return true;
      }else{
        console.log("fail save bucket")
        
        return false;
      }
    } catch (err) {
      console.error("Error", err);
      return false;
    }
  }
  async function likeBucket(bucketId:string) {
    try {
      const resp = await service.patchLikeBucket(bucketId);
      if (resp) {
        console.log('like success : ', resp);
      }
      return resp;
    } catch (error) {
      console.log('error', error);
    }
  }

  async function IsLikedBucket(bucketId:string) {
    try {
      const resp = await service.getIsLiked(bucketId);
      return resp;
    } catch (error) {
      console.log('error', error);
      // return error;
    }
  }

  

  return{
    addBucket,
    bringBucket,
    removeBucket,
    likeBucket,
    IsLikedBucket,               
    addUrl,
    addBucketItem
  };

}