import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useBucketlist } from "../../hooks/useBucketlist";
function CreateBucket(props) {
  const [bucketName, setBucketName] = useState("");
  const [bucketDescription, setBucketDescription] = useState("");
  const {addBucket}=useBucketlist();
  const handleNameChange = (e) => {
    setBucketName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setBucketDescription(e.target.value);
  };

  const handleSubmit = async () => {
    // 여기에 제출 로직을 추가합니다.
    console.log("Bucket Name:", bucketName);
    console.log("Bucket Description:", bucketDescription);
    await addBucket(bucketName, bucketDescription);
  };

  return (
    <>
      <Modal {...props}>
        <Modal.Header closeButton style={{ borderBottom: "none" }}>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ alignContent: "center" }}>
          <div style={{ marginBottom: "60px" }}>
            <h2 style={{ fontWeight: "bold", color: "#6066FF" }}>
              새 버킷 만들기
            </h2>
            <h2>새 버킷의 이름을 입력해주세요.</h2>
          </div>
          <p>
            <Form.Label
              htmlFor="inputPassword5"
              style={{ fontSize: "20px", color: "#615B67" }}
            >
              버킷 이름
            </Form.Label>
            <Form.Control
              placeholder="e.g 로코, 류선재 모음집 , 시간 떼우기 좋은 영상들"
              style={{
                borderRadius: "0px",
                border: "none",
                borderBottom: "3px solid #6066FF",
                marginBottom: "40px",
              }}
              onChange={handleNameChange}
            />
            <Form.Label
              htmlFor="inputPassword5"
              style={{ fontSize: "20px", color: "#615B67" }}
            >
              버킷 간단 설명
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="100자 이내로 써주세요."
              aria-label="With textarea"
              style={{
                border: "3px solid #6066FF",
                height: "200px",
              }}
              onChange={handleDescriptionChange}
            />
          </p>
        </Modal.Body>
        <Modal.Footer style={{ borderTop: "none" }}>
          <div className="d-grid gap-2" style={{ width: "100%" }}>
            <Button
              style={{
                backgroundColor: "#00B0F0",
                borderRadius: "20px",
                border: "none",
                height: "60px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              onClick={handleSubmit}
            >
              CREATE NEW BUCKET
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateBucket;
