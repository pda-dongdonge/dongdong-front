/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useBucketlist } from "@/hooks/useBucketlist";
import "./storeurl.css";
import useModal from "@/hooks/useModal";

// type StoreModalProps = {
//   bucketId: string;
// }

export function StoreUrlModal(props: any) {
  const [link, setLink] = useState("");
  const [comment, setComment] = useState("");
  const { addUrl } = useBucketlist();
  const { open, close } = useModal();
  // const {user_id}=useAuth();
  const bucketID = props.bucket_id;
  const handleLinkChange = (e: any) => {
    setLink(e.target.value);
  };

  const handleCommentChange = (e: any) => {
    setComment(e.target.value);
  };
  const handleClick = async () => {
    if (!link.trim() || !comment.trim()) {
      // alert("링크와 내용을 모두 입력해주세요.");
      open("Check", "링크와 내용을 모두 입력해주세요.", close);

      return;
    }

    console.log(link, comment);

    try {
      const success = await addUrl(link, comment, bucketID);
      if (success.success) {
        // alert("링크 정보가 양동이에 추가되었습니다.");
        open("Confirm", "링크 정보가 양동이에 추가되었습니다.", close);

        props.onHide();
        location.reload();
      } else {
        // alert(success.message);
        open("Confirm", `${success.message}`, close);
      }
    } catch (error) {
      console.error("Error handling click event:", error);
      // alert("오류가 발생했습니다. 다시 시도해주세요.");
      open("Fail", "오류가 발생했습니다. 다시 시도해주세요.", close);
    }
  };

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
          <InputGroup
            className="mb-3"
            style={{
              borderColor: "#6066FF",
              border: "2px solid #6066FF",
              borderRadius: "7px",
            }}
          >
            <InputGroup.Text id="basic-addon1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-link-45deg"
                viewBox="0 0 16 16"
              >
                <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
              </svg>
            </InputGroup.Text>
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
              style={{
                borderColor: "#6066FF",
                border: "2px solid #6066FF",
                borderRadius: "7px",
              }}
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

      <StoreUrlModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
