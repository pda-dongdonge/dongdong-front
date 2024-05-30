import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Nav } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export default function BucketNav() {
  const { user } = useAuth();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navigate = useNavigate();
  const handleClick = (path: string) => {
    setActiveLink(path);
    navigate(path);
  };

  return (
    <>
      <style>
        {`
      .active-link {
      border-bottom: 4px solid #6366f1; /* Indigo 색상 */
    }

.nav-link:active {
    border-bottom: 4px solid #6366f1; /* 클릭 시 바로 색상 변경 */
}


    `}
      </style>
      <Nav
        className="justify-content-start"
        style={{
          gap: "5%",
          marginTop: "15px",
          marginBottom: "15px",
          marginLeft: "10px",
        }}
      >
        <div
          className={`cursor-pointer nav-link-style w-24 mr-12 text-center no-underline text-inherit px-2 py-2 hover:no-underline focus:no-underline ${
            activeLink === "/hot" ? "active-link" : ""
          }`}
          style={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
          onClick={() => handleClick("/hot")}
        >
          🔥Hot
        </div>

        <div
          onClick={() => handleClick("/now")}
          className={`cursor-pointer nav-link-style w-24 mr-12 text-center no-underline text-black text-inherit px-2 py-2 hover:no-underline focus:no-underline ${
            activeLink === "/now" ? "active-link" : ""
          }`}
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          ✨Now
        </div>

        {user.username ? (
          <div
            onClick={() => handleClick("/feed")}
            className={`cursor-pointer nav-link-style w-24 mr-12 text-center no-underline text-inherit text-black px-2 py-2 hover:no-underline focus:no-underline ${
              activeLink === "/feed" ? "active-link" : ""
            }`}
            style={{ fontWeight: "bold", fontSize: "18px" }}
          >
            💖Feed
          </div>
        ) : (
          <div>&nbsp;</div>
        )}
      </Nav>
    </>
  );
}
