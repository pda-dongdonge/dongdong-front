// import { RootState } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import bucketlistAPI from "../apis/bucketlistAPI";

const { VITE_BASE_URL } = import.meta.env;
export function useBucketlist() {
  //const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const service = new bucketlistAPI(VITE_BASE_URL + "bucket");

  return {
    // getBucketList
  };
}