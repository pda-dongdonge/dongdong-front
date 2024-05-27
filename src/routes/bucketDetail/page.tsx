// import React from "react";
import MyNavbar from "../../components/MyNavbar/MyNavbar";
import BucketInfo from "./components/bucketInfo";

export default function BucketDetailPage() {
  return (
    <>
      <MyNavbar />
      <div className="flex justify-center">
        <BucketInfo />
      </div>
    </>
  );
}
