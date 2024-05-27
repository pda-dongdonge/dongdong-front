// import React from 'react'

interface PhotoGridProps {
    imageUrl: string[]
}

export default function PhotoGrid({imageUrl}: PhotoGridProps) {
    console.log(imageUrl.length);

    const gridContainerCols = (listLength:number):string =>  {
        if(3 === listLength) { //3개일때
            return "grid-cols-[66%_34%]";
        }
        else if(5 <= listLength) { //5, 6개 이상
            return "grid-cols-[33%_34%_33%]";
        }
        else if (1 === listLength) { //1개일땐 없음
            return "";
        }
        else { //4개, 2개 이하일땐 반반
            return "grid-cols-[50%_50%]";
        }
    }
    
    
    const gridContainerRows = (listLength:number):string =>  {
        if(3 <= listLength) {
            return "grid-rows-[50%_50%]";
        }
        else {
            return "";
        }
    }

    //grid 요소 예외처리
    const gridItemCss = (listLength:number, index:number):string => {
        console.log(listLength);
        //5개 중 2번째
        if (listLength === 5 && index === 1) {
            return "row-span-2 col-start-2 col-end-3 h-full";
        } 
        //3개 중 1번째
        else if (listLength === 3 && index === 0) {
            return "row-[1/_span_2]";
        }
        return "";
    }

  return (
    <div className={`overflow-hidden h-[270px] rounded-[20px] grid ${gridContainerCols(imageUrl.length)} ${gridContainerRows(imageUrl.length)}`}>
        {imageUrl &&
    imageUrl.map((image, index, arr)=>(
        <img src={image} className={`object-cover ${gridItemCss(arr.length, index)}`}/>
    ))}
    </div>
  )
}