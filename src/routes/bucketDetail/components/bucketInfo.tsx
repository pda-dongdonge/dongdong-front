// import React from "react";
import PhotoGrid from "./photoGrid";

const dummyData = {
  userImage:
    "https://i.namu.wiki/i/Qvk18CBALY3A7CKoYdienLC1B8q8JXEZIiydvuxxVFFqGYjDmDOaY2vB0YX_P_WbxA5REh9NtAdhi5L1TLEx1A.webp",
  content: "가짜설명....",
  photoList: [
    "https://d2gfz7wkiigkmv.cloudfront.net/pickin/2/1/2/zU_ec1ZnTQSqkTIQbQaxsA",
    "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FgKDADa_OS_SIwwFOE17Ezw&w=1080&q=75",
    "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FvmyksiS1Q_WxHe8ntXhQiA&w=1080&q=75",
    // "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FhjvCBXzQTAmlSwo8oAGy3w&w=1080&q=75",
    // "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2Fo9LQPpyKQFWLbpJTZNXj3A&w=1080&q=75",
    // "https://www.wishbucket.io/_next/image?url=https%3A%2F%2Fd2gfz7wkiigkmv.cloudfront.net%2Fpickin%2F2%2F1%2F2%2FWt64eovFTgq6YRSMwzeNrg&w=1080&q=75",
  ],
};

//최대 6개,
// 1개 / 2개 / 3개 / 4개 / 6개
export default function BucketInfo() {
  return (
    <div className="w-full max-w-[500px] shadow-lg h-[433px] rounded-[2rem]">
      <div className="w-full h-[50px] rounded-t-[2rem] bg-cyan-300 relative">
        <img
          src={dummyData.userImage}
          className="w-[48px] h-[48px] rounded-full absolute top-[14px] left-[13px] border-2 border-white"
        />
        <p className="absolute left-[75px] top-[40%] font-semibold">kenny</p>
      </div>
      <div className="px-[1rem] pt-[1.5rem]">
        <p>{dummyData.content}</p>
      </div>
      <div className="px-[1rem]">
        <PhotoGrid imageUrl={dummyData.photoList} />
      </div>
    </div>
  );
}
