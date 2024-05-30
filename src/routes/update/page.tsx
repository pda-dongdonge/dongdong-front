import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
//import {getBucketList} from "../../apis/bucketlistAPI";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "./BucketItem";
const { VITE_BASE_URL } = import.meta.env;
import { useNavigate } from "react-router-dom";
export interface Maker {
  _id: string;
  username: string;
}

export interface Bucket {
  _id: number;
  title: string;
  contents: string;
  maker: Maker;
}
export default function UpdatePage() {
  const [bucketList, setBucketList] = useState<Bucket[]>([]);

  const service = new bucketlistAPI(VITE_BASE_URL + "");
  const navigate = useNavigate();

  //최신 순으로 하려면 역순으로 해야함
  useEffect(() => {
    const fetchBucketData = async () => {
      try {
        const data = await service.getBucketList();
        const reversedData = data.reverse();
        setBucketList(reversedData);
      } catch (error) {
        console.error("Error fetching bucket data:", error);
      }
    };

    fetchBucketData();
  }, []);

  const UserClick = (bucket: Bucket) => {
    console.log(bucket);
    navigate(`/bucketlist/${bucket._id}`);
  };

  return (
    <>
      <BucketNav />

      <div className="flex flex-wrap justify-between">
        {bucketList.map((bucket) => (
          <BucketItem
            key={bucket._id}
            bucket={bucket}
            handleClick={UserClick}
          />
        ))}
      </div>
    </>
  );
}
