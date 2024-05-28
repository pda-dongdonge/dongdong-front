import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import CreateBucket from "../CreateBucket/CreateBucket";
import SignupModal from "../Signup/Signup";
import { useAuth } from "@/hooks/useAuth";
const EXPAND_BREAKPOINT = "md";

export default function MyNavbar() {
  const { user, login, logOut } = useAuth();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean | string>(true);
  const [createShow, setCreateShow] = useState<boolean>(false);

  function handleShow(breakpoint: boolean | string) {
    setFullscreen(breakpoint);
    setCreateShow(true);
  }

  return (
    <Navbar
      expand={EXPAND_BREAKPOINT}
      className="mb-3"
      sticky="top"
      style={{ backgroundColor: "white", padding: "20px" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="/dongdonglogo.png"
            style={{
              width: "60px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`} />
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              <img
                src="/dongdonglogo.png"
                style={{
                  width: "60px",
                  marginRight: "20px",
                  marginLeft: "20px",
                }}
              ></img>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0 `}
              style={{ gap: "50px"}}
            >
              <Nav.Link
                className="flex-grow-1 text-center"
                style={{
                  fontSize: "23px",
                  justifyItems: "center",
                  marginTop: "10px",
                }}
              >
               <FaSignInAlt onClick={() => setModalShow(true)} />

                <SignupModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
            />
              </Nav.Link>
              <Nav.Link
                className="flex-grow-1 text-center"
                style={{ fontSize: "23px", marginTop: "10px" }}
              >
                <IoPerson />
              </Nav.Link>
            </Nav>
            <Nav
              className="flex-grow-1"
              style={{ gap: "10%", marginTop: "15px" }}
            >
              <Nav.Link
                href="#action2"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                트랜드
              </Nav.Link>
              <Nav.Link
                href="/update"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                최신
              </Nav.Link>
              <Nav.Link
                href="#action2 "
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                피드
              </Nav.Link>
              <Button
                as={Nav.Link}
                href="#action2"
                size="lg"
                style={{
                  backgroundColor: "#00B0F0",
                  borderRadius: "30px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "16px",
                  padding: "13px 22px", // Padding for large button size
                  display: "inline-block",
                  textAlign: "center",
                }}
                onClick={() => handleShow(true)}
              >
                CREATE
              </Button>

              <CreateBucket
                show={createShow}
                fullscreen={fullscreen}
                onHide={() => setCreateShow(false)}
              />
            </Nav>
          </Offcanvas.Body>
          {user.username ? (
            <div
              onClick={async () => {
                await logOut();
              }}
            >
              로그아웃
            </div>
          ) : (
            <Nav.Link
              href="/sign"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              로그인
            </Nav.Link>
          )}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
