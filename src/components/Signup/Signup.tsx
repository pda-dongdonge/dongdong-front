import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useAuth } from "@/hooks/useAuth";
import { useRef, useState } from "react";
import { IAuth } from "@/apis/authAPI";
interface IAuthWithConfirm extends IAuth {
  confirmPassword: string;
}
type Props = {
  show: boolean;
  onHide: () => void;
};
export default function SignupModal(props: Props) {
  const { signUp, isEmailVerify } = useAuth();
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const [formData, setFormData] = useState<IAuthWithConfirm>({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleEmailCheck = async () => {
    if (emailRef.current) {
      const email = emailRef.current.value;
      const res = await isEmailVerify(email);
      if (res) {
        //이메일 사용가능 팝업 띄우기
        alert("사용가능");
      } else {
        alert("중복이요");
      }
    }
  };

  const handleSubmit = async () => {
    setError(null);
    setSuccess(null);

    const { email, username, password, confirmPassword, phone } = formData;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await signUp({ email, username, password, phone });
      setSuccess(`Sign up successful! ${res.username}`);
      props.onHide();
    } catch (error) {
      setError("Sign up failed. Please try again.");
    }
  };
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
          Register
        </h1>
        <p>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Full Name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
              onChange={handleChange}
              name={"username"}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              ref={emailRef}
              placeholder="E-mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
              onChange={handleChange}
              name={"email"}
            />
            <Button
              variant="secondary"
              id="button-addon2"
              style={{
                backgroundColor: "#8B54FF",
                border: "none",
                color: "white",
              }}
              onClick={handleEmailCheck}
            >
              CHECK
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Phone"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
              onChange={handleChange}
              name={"phone"}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
              onChange={handleChange}
              name={"password"}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
              onChange={handleChange}
              name={"confirmPassword"}
            />
          </InputGroup>
        </p>
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
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Button
            style={{
              backgroundColor: "#6066FF",
              border: "none",
              height: "40px",
              borderRadius: "20px",
              fontWeight: "500",
            }}
          >
            Have account? Sign in
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
