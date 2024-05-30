import BucketNav from "../bucketlist/page";
import { useEffect, useState } from "react";
//import {getBucketList} from "../../apis/bucketlistAPI";
import { Bucket } from "../../store/bucketlist";
import axios from "axios";
import bucketlistAPI from "../../apis/bucketlistAPI";
import BucketItem from "./BucketItem";
const { VITE_BASE_URL } = import.meta.env;
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useNavigate } from "react-router-dom";

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
    navigate(`/bucketlist/${bucket._id}`)
  };

  return  (
    <>
<BucketNav />

    <div className="flex flex-wrap justify-between">
          {bucketList.map(bucket => (
            <BucketItem key={bucket._id} bucket={bucket} handleClick={UserClick} />
          ))}
      </div>
    
    </>

  );
}

/*
<div className="p-4">
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
    <Masonry gutter="20px">
        {bucketList.map((bucket) => (
            <BucketItem key={bucket._id} bucket={bucket} handleClick={UserClick} />
        ))}
      </Masonry>
    </ResponsiveMasonry>

    </div>
    */