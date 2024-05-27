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


useEffect(() => {
    service.getBucketList().then((data) => {
      setBucketList(data);
      console.log(data);
    });
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
