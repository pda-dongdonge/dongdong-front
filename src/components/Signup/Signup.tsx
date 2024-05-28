import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function SignupModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ borderBottom: "none" }}>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign:"center"}}>
        <div style={{ fontSize: "40px", marginBottom: "20px", display:"flex", justifyContent:"center"}}>
          <img src="/dongdonglogo.png" width="60px" ></img>
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
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <Form.Control
              placeholder="E-mail"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
            />
            <Button
              variant="secondary"
              id="button-addon2"
              style={{
                backgroundColor: "#8B54FF",
                border: "none",
                color: "white",
              }}
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
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderColor: "#6066FF", border: "2px solid #6066FF" }}
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
