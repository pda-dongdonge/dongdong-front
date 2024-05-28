import { Nav } from "react-bootstrap";


export default function BucketNav() {


  return  (
    <Nav className="justify-content-start flex-grow-1" style={{ gap: "5%", marginTop: "15px", marginBottom: "15px"  }}>
        <Nav.Link
            href="#trend"
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

        <Nav.Link
            href="#feed"
            style={{ fontWeight: "bold", fontSize: "18px", color:"black" }}
            >
        💖Like
        </Nav.Link>
    </Nav>
  );
}
