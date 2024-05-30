import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuth } from "@/hooks/useAuth";
import { useRef, useState, useEffect } from "react";

type Props = {
  show: boolean;
  onHide: () => void;
  goSignUp: () => void;
};

export default function SignInModal(props: Props) {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const { login } = useAuth();
  // ref로 바꾸기
  const [inputValue, setInputValue] = useState("");
  const [inputpw, setInputPw] = useState("");
  const refId = useRef<HTMLInputElement>(null);
  const refPw = useRef<HTMLInputElement>(null);
  const handleLogin = async () => {
    const res = await login(inputValue, inputpw);
    if (res) {
      props.onHide();
    } else {
      setError("로그인에 실패했습니다");
    }
  };

  const handleGoSignUp = () => {
    props.goSignUp();
  };
  const enterInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (inputValue && inputpw) {
        handleLogin();
      }
      refId?.current?.blur();
      refPw?.current?.blur();
    }
  };
  useEffect(() => {
    // 클린업 함수로 상태 초기화
    if (!props.show) {
      setInputPw("");
      setInputValue("");
      setError(null);
    }
  }, [props.show]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "40px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src="/dongdonglogo.png" width="60px"></img>
        </div>
        <h1
          style={{
            color: "#252EFF",
            marginBottom: "40px",
            fontSize: "40px",
            fontWeight: "bolder",
          }}
        >
          Sign In
        </h1>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="email"
            aria-label="Recipient's Email"
            aria-describedby="basic-addon2"
            style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
            value={inputValue}
            ref={refId}
            onChange={(e) => setInputValue(e.target.value)}
            name={"email"}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <Form.Control
            type="password"
            placeholder="password"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
            value={inputpw}
            ref={refPw}
            onChange={(e) => setInputPw(e.target.value)}
            onKeyDown={enterInput}
            name={"username"}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ borderTop: "none" }}>
        {error && <span>{error}</span>}
        <div className="d-grid gap-2" style={{ width: "100%" }}>
          <Button
            style={{
              backgroundColor: "#8B54FF",
              border: "none",
              height: "40px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Button
            style={{
              backgroundColor: "#5468ff",
              border: "none",
              height: "40px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
            onClick={handleGoSignUp}
          >
            회원이 아니신가요?
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
