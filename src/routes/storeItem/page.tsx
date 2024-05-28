import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import CreateBucket from "@/components/CreateBucket/CreateBucket";
import { useBucketlist } from "@/hooks/useBucketlist";
function StoreItems(props) {
  const [buckets, setBuckets]=useState([]);
  const [showCreateBucketModal, setShowCreateBucketModal] = useState(false);
  const {bringBucket}=useBucketlist();
  const handleShow = () => setShowCreateBucketModal(true);
  const handleClose = () => setShowCreateBucketModal(false);
  useEffect(() => {
    bringBucket().then(data => {
            if (data) {
                setBuckets(data);
            } else {
                console.error("Failed to retrieve buckets");
            }
      });
  }, []);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "20px" }}>
      <h4 style={{ fontWeight: "bold", textAlign: "center", marginBottom:"10%", color:"gray"}}>위시 동영상 저장</h4>
      
      <div style={{ flex: 1 }}>
        <Button variant="info" style={{borderRadius:"10px", fontSize:"16px", fontWeight:"600", color:"white", marginRight:"15px"}}
        onClick={handleShow}>+</Button>
        <span style={{fontSize:"17px", color:"darkgray"}} >새 버킷 추가</span>
      </div>

      <div style={{ marginTop: "20px" }}>
        {buckets.length > 0 ? (
          buckets.map((bucket, index) => (
            <div key={index} style={{ display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "1px solid #ddd" }}>
              <h5 style={{ margin: "0", color: "black" }}>{bucket.title}</h5>
              <p style={{ margin: "0", color: "darkgray" }}>{bucket.contents}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>

            </div>
          ))
        ) : (
          <p style={{ color: "darkgray" }}>No buckets available</p>
        )}
      </div>


      <footer style={{ marginTop: "auto" }}>
        <Button
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
      <CreateBucket show={showCreateBucketModal} onHide={handleClose} />
    </div>
  );
}

export default StoreItems;
