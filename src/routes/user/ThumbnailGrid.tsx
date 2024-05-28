// import React from 'react'

interface PhotoGridProps {
  imageUrl: string[];
}

export default function ThumbnailGrid({ imageUrl }: PhotoGridProps) {
  console.log(imageUrl.length);

  const gridContainerCols = (listLength: number): string => {
    if (3 <= listLength) {
      //3개일때
      return "grid-cols-[66%_34%]";
    } else if (2 === listLength) {
      //2개 이하일땐 반반
      return "grid-cols-[50%_50%]";
    }
    //1개
    return "";
  };

  const gridContainerRows = (listLength: number): string => {
    if (3 <= listLength) {
      return "grid-rows-[50%_50%]";
    } else {
      return "";
    }
  };

  //grid 요소 예외처리
  const gridItemCss = (listLength: number, index: number): string => {
    console.log(listLength);
    //3개 중 2번째
    if (listLength === 3 && index === 1) {
      return "h-full border-b-2 border-white-500";
    }
    //3개 중 3번째
    if (listLength === 3 && index === 1) {
      return "h-full";
    }
    //3개 중 1번째
    if (listLength === 3 && index === 0) {
      return "row-[1/_span_2] h-full border-r-2 border-white-500";
    }
    //2개 중 1번째
    if (listLength === 2 && index === 0) {
      return "h-full w-full border-r-2 border-white-500";
    }
    return "h-full w-full";
  };

  return (
    <div
      className={`overflow-hidden  rounded-[20px] grid ${gridContainerCols(
        imageUrl.length
      )} ${gridContainerRows(imageUrl.length)}`}
    >
      {imageUrl &&
        imageUrl.map((image, index, arr) => (
          <img
            src={image}
            className={`object-cover ${gridItemCss(arr.length, index)}`}
          />
        ))}
    </div>
  );
}
