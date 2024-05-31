import { Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import { useState } from "react";
import CreateBucket from "../CreateBucket/CreateBucket";
import SignupModal from "../Signup/Signup";
import { useAuth } from "@/hooks/useAuth";
import { IoIosArrowForward } from "react-icons/io";
import SignInModal from "../Signup/SignIn";
const EXPAND_BREAKPOINT = "always";

export default function MyNavbar() {
  const { user, logOut } = useAuth();
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalLoginShow, setLoginModalShow] = useState<boolean>(false);
  const [fullscreen, setFullscreen] = useState<boolean | string>(true);
  const [createShow, setCreateShow] = useState<boolean>(false);

  function handleShow(breakpoint: boolean | string) {
    setFullscreen(breakpoint);
    setCreateShow(true);
  }
  function goSignUp() {
    setLoginModalShow(false);
    setModalShow(true);
  }
  function goSignIn() {
    setModalShow(false);
    setLoginModalShow(true);
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
        .no-wrap{
          flex-wrap: nowrap !important;
          white-space: nowrap;
        }
        .no-margin-right {
          margin-right: 0 !important;
        }
      `}
      </style>
      <Navbar
        expand={EXPAND_BREAKPOINT}
        className="mb-3"
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
          <div className="flex flex-row items-center justify-between md:gap-10">
            <Navbar.Brand href="/">
              <img
                src="/dongdonglogo.png"
                style={{
                  width: "60px",
                }}
              />
            </Navbar.Brand>
            <a
              href="/"
              className="jua-regular text-2xl text-black no-underline"
            >
              DONGdongE
            </a>
          </div>
          <Navbar.Toggle
            style={{ border: "none", cursor: "pointer" }}
            aria-controls={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          />
        </div>
        <Navbar.Offcanvas
          id={`Navbar-expand-${EXPAND_BREAKPOINT}`}
          aria-labelledby={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`NavbarLabel-expand-${EXPAND_BREAKPOINT}`}>
              <a href="/">
                <img
                  src="/dongdonglogo.png"
                  style={{
                    width: "60px",
                  }}
                ></img>
              </a>
            </Offcanvas.Title>
            <a
              href="/"
              className="jua-regular text-xl ml-5 text-black no-underline"
            >
              DONGdongE
            </a>
          </Offcanvas.Header>
          <Offcanvas.Body className="flex-row-reverse">
            <Nav
              className={`flex-row pb-4 pb-${EXPAND_BREAKPOINT}-0 `}
              style={{ gap: "50px" }}
            >
              <div className="flex-grow-1 rounded-md py-3.5 pl-5 pr-5 bg bg-violet-50">
                {user.username ? (
                  <Nav.Link
                    href={`/user/${user._id}`}
                    style={{ border: "none" }}
                  >
                    <div className="flex-row flex items-center justify-between  font-bold text-sm">
                      {user.username}
                      <img
                        className="rounded-full w-10"
                        src="/dummy-profile.png"
                      />
                    </div>
                    <div className="flex-row flex items-center text-xs border-none">
                      내 버킷 <IoIosArrowForward />
                    </div>
                  </Nav.Link>
                ) : (
                  <div onClick={() => setLoginModalShow(true)}>
                    <div className="flex-row flex items-center  font-bold text-sm">
                      로그인 <IoIosArrowForward />
                    </div>
                  </div>
                )}

                <SignupModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  goSignIn={goSignIn}
                />
                <SignInModal
                  show={modalLoginShow}
                  onHide={() => setLoginModalShow(false)}
                  goSignUp={goSignUp}
                />
              </div>
            </Nav>

            <Nav
              className="flex-grow-1 no-wrap"
              style={{whiteSpace: "nowrap"}}
            >
              <Nav.Link
                href="/hot"
                className="no-margin-right"
              >
                🔥Hot
              </Nav.Link>
              <Nav.Link
                href="/now"
              >
                ✨Now
              </Nav.Link>
              <div>
                {user.username ? (
                  <>
                    <Nav.Link
                      href="/feed"
                    >
                      💖Feed
                    </Nav.Link>
                  </>
                ) : (
                    <>
                    </>
                  
                )}

              </div>
              <div>
              <Button
                      as="a"
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
                        width:"100%"
                      }}
                      onClick={() => handleShow(true)}
                    >
                      CREATE
                    </Button>
                    <hr/>
                    </div>

              <div className="text-right text-xs cursor-pointer">
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
                fullScreen={fullscreen}
                onHide={() => setCreateShow(false)}
              />
            </Nav>

          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}
