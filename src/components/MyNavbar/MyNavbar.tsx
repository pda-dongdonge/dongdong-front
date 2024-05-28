import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import React from "react";
import { useState } from "react";
import CreateBucket from "../CreateBucket/CreateBucket";
import SignupModal from "../Signup/Signup";
import { useAuth } from "@/hooks/useAuth";
import { IoIosArrowForward } from "react-icons/io";
const EXPAND_BREAKPOINT = "always";

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
        <Navbar.Brand href="/">
          <img
            src="/dongdonglogo.png"
            style={{
              width: "60px"
            }}
          ></img>
         
        </Navbar.Brand>
        DONGDONG
        <Button
          as={Nav.Link}
          href="#action2"
          size="lg"
          style={{
            backgroundColor: "#7758F6",
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
            <div>
            Dongdong
            </div>
            
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0 `}
              style={{ gap: "50px"}}
            >
              <div
                className="flex-grow-1 rounded-md py-3.5 pl-5 pr-5 bg bg-violet-50"
              >
               
               {user.username ? (
                <Nav.Link
                href="user">
                  <div className="flex-row flex items-center justify-between  font-bold text-sm">
                    {user.username}
                    <img className="rounded-full w-10" src="public\dummy-profile.png"/>
                  </div>
                  <div className="flex-row flex items-center text-xs">
                  내 버킷 <IoIosArrowForward />
                  </div>
                  </Nav.Link>
                ) : (
                <Nav.Link
                  href="sign">
                  <div className="flex-row flex items-center  font-bold text-sm">
                  로그인 <IoIosArrowForward />
                  </div>
                </Nav.Link>
                )}

                <SignupModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
            />
              </div>
              
                
              
            </Nav>
            
            <Nav
              className="flex-grow-1"
              style={{ gap: "10%", marginTop: "15px" }}
            >
              <Nav.Link
                href="/hot"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Hot
              </Nav.Link>
              <Nav.Link
                href="/now"
                style={{ fontWeight: "bold", fontSize: "18px" }}
              >
                Now
              </Nav.Link>

              <div>
                {user.username ? (
                  <>
                    <Nav.Link
                      href="#action2"
                      style={{ fontWeight: "bold", fontSize: "18px" }}
                    >
                      Like
                    </Nav.Link>
                    <hr />
                  </>
                ) : (
                  <hr />
                )}
              </div>
              
              <div className="text-right text-xs"
              onClick={async () => {
                await logOut();
              }}
            >
             로그아웃
            </div>
              
             
              <CreateBucket
                show={createShow}
                fullscreen={fullscreen}
                onHide={() => setCreateShow(false)}
              />
            </Nav>
          </Offcanvas.Body>
          
        </Navbar.Offcanvas>
      </Container>
      
    </Navbar>
  );
}


/*
 <FaSignInAlt onClick={() => setModalShow(true)} />
*/