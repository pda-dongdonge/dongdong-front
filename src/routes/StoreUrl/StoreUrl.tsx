import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import './storeurl.css';
 function StoreUrlModal(props) {
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const handleClick=()=>{
    if (!link.trim() || !comment.trim()) {
      alert("링크와 내용을 모두 입력해주세요.");
      return;
    }
    console.log(link);
    console.log(comment);

  }
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="slide-up-modal"
    >
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
       
        <h1
          style={{
            color: "#6066FF",
            marginBottom: "40px",
            fontSize: "25px",
            fontWeight: "bolder",
          }}
        >
          양동이에 영상 링크 저장하기
        </h1>
        <p>
        <InputGroup className="mb-3" style={{ borderColor: "#6066FF", border: "2px solid #6066FF", borderRadius:"7px"}}>
        <InputGroup.Text id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16"
       >
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg></InputGroup.Text>
        <Form.Control
          placeholder="영상 링크를 붙여넣어주세요"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={handleLinkChange}
          
        />
      </InputGroup>

      <InputGroup className="mb-3">
            <Form.Control
              placeholder="영상에 대한 코멘트를 추가해주세요"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF", borderRadius:"7px"}}
              onChange={handleCommentChange}
            />
          </InputGroup>
        </p>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        <div className="d-grid gap-2" style={{ width: "100%" }}>
          <Button
            style={{
              backgroundColor: "#8B54FF",
              border: "none",
              height: "40px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
            onClick={handleClick}
          >
            저장
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
export default function StoreUrl() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Signup
      </Button>

      <StoreUrlModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
