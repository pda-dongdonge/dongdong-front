import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { Nav } from "react-bootstrap";


export default function BucketNav() {
    const { user, login, logOut } = useAuth();

  return  (
    <Nav className="justify-content-start" style={{ gap: "5%", marginTop: "15px", marginBottom: "15px" }}>
        <Nav.Link
            href="/hot"
            style={{ fontWeight: "bold", fontSize: "18px", color:"black" }}
        >
            🔥Hot
        </Nav.Link>

        <Nav.Link
            href="/now"
            style={{ fontWeight: "bold", fontSize: "18px", color:"black" }}
        >
        ✨Now
        </Nav.Link>

        {user.username ? (
          <Nav.Link
            href="/feed"
            style={{ fontWeight: "bold", fontSize: "18px", color: "black" }}
          >
            💖Feed
          </Nav.Link>
          ) : (
            <div>&nbsp;</div>
          )}

    </Nav>
  );
}
