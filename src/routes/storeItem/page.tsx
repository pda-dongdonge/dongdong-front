import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CreateBucket from "@/components/CreateBucket/CreateBucket";
import { useBucketlist } from "@/hooks/useBucketlist";
import { useLocation } from "react-router-dom";

function StoreItems() {
  const [buckets, setBuckets]=useState([]);
  const [showCreateBucketModal, setShowCreateBucketModal] = useState(false);
  const [selectedBucketId, setSelectedBucketId] = useState(null);
  const {bringBucket, removeBucket, addBucketItem }=useBucketlist();
  const handleShow = () => setShowCreateBucketModal(true);
  const handleClose = () => setShowCreateBucketModal(false);
  const location = useLocation();

  const bucketItemId=location.state.bucketItemId;
  const handleImageClick = (id) => {
    setSelectedBucketId(id);
  };

  const handleRemoveBucket=(id)=>{
    confirm("정말 삭제하시겠습니까?")
    removeBucket(id).then(() => {
      setBuckets(buckets.filter(bucket => bucket._id !== id));
    }).catch(error => {
      console.error("Failed to remove bucket", error);
    });
  }
  useEffect(() => {
    bringBucket().then(data => {
            if (data) {
                setBuckets(data);
            } else {
                console.error("Failed to retrieve buckets");
            }
      });
  }, []);


  const handleStore = () => {
    if (!selectedBucketId) {
      alert("영상을 저장할 양동이를 선택해주세요.");
    } else {
      addBucketItem(selectedBucketId, bucketItemId)
        .then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              throw new Error(errorData.message);
            });
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          alert("영상이 양동이에 성공적으로 저장되었습니다.");
          location.reload(); // 페이지 새로고침
        })
        .catch(error => {
          alert(`Error: ${error.message}`);
          console.error("Failed to add bucketItem", error);
        });
    }
  }
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "20px", overflowY: "auto", paddingBottom: "70px", paddingTop:"60px"}}>
      <h4 style={{ fontWeight: "bold", textAlign: "center", marginBottom:"10%", color:"gray"}}>위시 동영상 저장</h4>
      
      <div style={{ flex: 1 }}>
        <Button variant="info" style={{borderRadius:"10px", fontSize:"16px", fontWeight:"600", color:"white", marginRight:"15px"}}>+</Button>
        <span style={{fontSize:"17px", color:"darkgray"}} >새 버킷 추가</span>
      </div>

      <div style={{ marginTop: "20px", marginBottom:"80px" }}>
        {buckets.length > 0 ? (
          buckets.map((bucket, index) => (
            <div key={index} style={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "0.5px solid #E9E4FF" }}>
              <div style={{display:"flex", flexDirection:"row"}}>
              {bucket.bucketItemList.length > 0 ? (
                    <div
                    onClick={() => handleImageClick(bucket._id)} 
                    style={{borderRadius: "15px",
                    backgroundImage: `url(${bucket.bucketItemList[0].imgUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    border: selectedBucketId === bucket._id ? "5px solid #994DE4" :"1px solid #B6A6F6",
                    cursor:"pointer"

                  }}></div>):(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bucket" viewBox="0 0 16 16"
                  onClick={() => handleImageClick(bucket._id)} 
                    style={{borderRadius: "15px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "50px",
                    height: "50px",
                    marginRight: "10px",
                    border: selectedBucketId === bucket._id ? "5px solid #994DE4" :"1px solid #B6A6F6",
                    cursor:"pointer",
                    padding:"10px",
                    backgroundColor:"#FCF7FF"

                  }}>
                  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0zm9.892 1-1.286 8.574a.5.5 0 0 1-.494.426H4.36a.5.5 0 0 1-.494-.426L2.58 6h10.838z"/>
                
                
                </svg>)}
                


                {

                }
                  
               <div style={{display:"flex", flexDirection:"column"}}>
              <h5 style={{ margin: "0", color: "black" }}>{bucket.title}</h5>
              <p style={{ margin: "0", color: "darkgray" }}>{bucket.contents}</p>
              </div>
              </div>
             
              <svg  onClick={() => handleRemoveBucket(bucket._id)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>

            </div>
          ))
        ) : (
          <p style={{ color: "darkgray" }}>No buckets available</p>
        )}
      </div>


      <footer style={{ position: "fixed",
        display:"flex",
        justifyContent:"center",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "10px 10px",
        backgroundColor: "white",
       }}>
        <Button
          onClick={handleStore}
          style={{
            backgroundColor: "#00B0F0",
            borderRadius: "20px",
            border: "none",
            width:"100%",
            height:"60px",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          저장
        </Button>
      </footer>
    </div>
  );
}

export default StoreItems;
