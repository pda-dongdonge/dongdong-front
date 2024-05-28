import React, { useEffect } from "react";
import BucketItem from "./BucketItem";
type Props = {
  tab: string;
};
export default function BucketListComponent({ tab }: Props) {
  const dummyBucket = [
    {
      _id: "asdf4242",
      title: "블랙맘바",
      content: "예아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 6,
      likeUser: ["13", "fsad", "fsdfwds", "fsdfw"],
    },
    {
      _id: "asdf423245242",
      title: "무한도전 모음",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 13,
      likeUser: ["13", "fsad", "fsdfwds", "fsdfw"],
    },
    {
      _id: "a42fasdg242",
      title: "드라마 탑10",
      content: "예아아아아아",
      maker: "fsi09fsdsfh",
      bucketItemList: [
        {
          _id: "665516b47eaebd397cdc2929",
          url: "https://www.youtube.com/watch?v=ZiHh81J3iZk",
          urlTitle: "선재업고튀어",
          urlContent: "선업튀 나만 안봤어",
          imgUrl: "https://i.ytimg.com/vi/ZiHh81J3iZk/hq720.jpg",
        },
      ],
      bucketCnt: 10,
      likeUser: [],
    },
  ];
  useEffect(() => {
    console.log("tab:", tab);
  }, []);
  return (
    <div className="user-bucketList w-full bg-[#d2b8ff] min-h-full rounded-t-[36px] p-4">
      <div>
        <p className="text-gray-500 dark:text--gray-900 m-2">{`${6}개의 영상목록`}</p>
      </div>
      <div className="bucket">
        {dummyBucket &&
          dummyBucket.map((bucket) => {
            return <BucketItem bucket={bucket}></BucketItem>;
          })}
      </div>
    </div>
  );
}
