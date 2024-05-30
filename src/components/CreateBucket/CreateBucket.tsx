import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useBucketlist } from "../../hooks/useBucketlist";
import { useNavigate } from "react-router-dom";
import useModal from "@/hooks/useModal";

function CreateBucket(props: {
  show: boolean;
  fullScreen: boolean | string;
  onHide: () => void;
}) {
  const { open, close } = useModal();
  const [bucketName, setBucketName] = useState("");
  const [bucketDescription, setBucketDescription] = useState("");
  const { addBucket } = useBucketlist();
  const navigate = useNavigate();
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBucketName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBucketDescription(e.target.value);
  };

  const handleSubmit = async () => {
    if (!bucketName.trim() || !bucketDescription.trim()) {
      // alert("제목과 내용을 모두 입력해주세요.");
      open("Check", "제목과 내용을 모두 입력해주세요.", close);
      return;
    }
    const success = await addBucket(bucketName, bucketDescription);
    if (success) {
      // alert("양동이가 성공적으로 추가되었습니다.");
      open("Confirm", "양동이가 성공적으로 추가되었습니다.", close);
      props.onHide();
      location.reload();
    } else {
      // alert("로그인이 필요합니다");
      open("Fail", "로그인이 필요합니다", close);
      props.onHide();
      navigate("/");
    }
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
              새 양동이 만들기
            </h2>
            <h2>새 양동이의 이름을 입력해주세요.</h2>
          </div>
          <p>
            <Form.Label
              htmlFor="inputPassword5"
              style={{ fontSize: "20px", color: "#615B67" }}
            >
              양동이 이름
            </Form.Label>
            <Form.Control
              placeholder="e.g 로코, 류선재 모음집 , 시간 떼우기 좋은 영상들, "
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
              양동이 간단 설명
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="e.g 밥 친구가 되어 줄 무한도전 레전드 편 모음영상입니다. , 자기 전에 보려고 만든 영상들~ 좋아요 눌러주세요!"
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
                backgroundColor: "#7758F6",
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
