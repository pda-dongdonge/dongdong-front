import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function StoreItems(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", padding: "20px" }}>
      <h4 style={{ fontWeight: "bold", textAlign: "center", marginBottom:"10%", color:"gray"}}>위시 동영상 저장</h4>
      
      <div style={{ flex: 1 }}>
        <Button variant="info" style={{borderRadius:"10px", fontSize:"16px", fontWeight:"600", color:"white", marginRight:"15px"}}>+</Button>
        <span style={{fontSize:"17px", color:"darkgray"}} >새 버킷 추가</span>
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
    </div>
  );
}

export default StoreItems;
