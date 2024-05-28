import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
//import {getBucketList} from "../../apis/bucketlistAPI";
import { Bucket } from "../../store/bucketlist";
import axios from "axios";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "./BucketItem";
const { VITE_BASE_URL } = import.meta.env;

export default function UpdatePage() {
const [bucketList, setBucketList] = useState<Bucket[]>([]);


const service = new bucketlistAPI(VITE_BASE_URL + "");

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
  };

  return  (
    <>
    <BucketNav />

    <div>
        {bucketList.map((bucket) => (
            <BucketItem key={bucket._id} bucket={bucket} handleClick={UserClick} />
        ))}
    </div>

    
    </>

  );
}
