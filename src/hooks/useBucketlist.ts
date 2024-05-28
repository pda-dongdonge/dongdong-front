// import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import bucketlistAPI from "../apis/bucketlistAPI";

const { VITE_BASE_URL } = import.meta.env;
export function useBucketlist() {
  //const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const service = new bucketlistAPI(VITE_BASE_URL + "bucket");




  async function addBucket(title: string, contents: string) {
    try {
      const res = await service.postBucket(title, contents);
      if (res) {
        console.log("bucket post success")
      } else {
        console.error("Login failed");
      }
    } catch (err) {
      //복구
      console.log("Error to login", err);
      //실패 케이스에 따라 로그아웃 실패 노출(존재하지않는계정 )
    }
  }
  return{
    addBucket
  };

}