import { Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
import CreateBucket from "../CreateBucket/CreateBucket";
import SignupModal from "../Signup/Signup";
import { useAuth } from "@/hooks/useAuth";
import { IoIosArrowForward } from "react-icons/io";
const EXPAND_BREAKPOINT = "always";

export default function MyNavbar() {
  const { user, logOut } = useAuth();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean | string>(true);
  const [createShow, setCreateShow] = useState<boolean>(false);

  function handleShow(breakpoint: boolean | string) {
    setFullscreen(breakpoint);
    setCreateShow(true);
  }

  return (
    <>
      <style>
        {`
        .jua-regular {
          font-family: "Jua", sans-serif;
          font-weight: 400;
          font-style: normal;
        }
      `}
      </style>

      <Navbar
        expand={EXPAND_BREAKPOINT}
        className="mb-3 mx-2"
        sticky="top"
        style={{
          backgroundColor: "white",
          paddingLeft: "5px",
          paddingRight: "5px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="flex flex-row justify-between items-center w-100">
          <div className="flex flex-row items-center gap-10">
            <Navbar.Brand href="/">
              <img
                src="/dongdonglogo.png"
                style={{
                  width: "60px",
                }}
              />
            </Navbar.Brand>
            <div className="jua-regular text-2xl">DONGdongE</div>
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
          </div>
          <div>
            <Navbar.Toggle
              aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`}
            />
          </div>
        </div>

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
                }}
              ></img>
            </Offcanvas.Title>
            <div className="jua-regular text-xl ml-5">DONGdongE</div>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0 `}
              style={{ gap: "50px" }}
            >
              <div className="flex-grow-1 rounded-md py-3.5 pl-5 pr-5 bg bg-violet-50">
                {user.username ? (
                  <Nav.Link href={`/user/${user._id}`}>
                    <div className="flex-row flex items-center justify-between  font-bold text-sm">
                      {user.username}
                      <img
                        className="rounded-full w-10"
                        src="/dummy-profile.png"
                      />
                    </div>
                    <div className="flex-row flex items-center text-xs">
                      내 버킷 <IoIosArrowForward />
                    </div>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="/sign">
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
                      href="/like"
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

              <div className="text-right text-xs">
                {user.username ? (
                  <>
                    <div
                      onClick={async () => {
                        await logOut();
                      }}
                    >
                      로그아웃
                    </div>
                  </>
                ) : (
                  <>
                    <div onClick={() => setModalShow(true)}>회원가입</div>
                  </>
                )}
              </div>

              <CreateBucket
                show={createShow}
                fullscreen={fullscreen}
                onHide={() => setCreateShow(false)}
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}
