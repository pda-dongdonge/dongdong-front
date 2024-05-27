import { Container } from "react-bootstrap";
import MyNavbar from "../components/MyNavbar/MyNavbar";
import { Outlet } from "react-router-dom";

export default function BoardLayout() {
    return (
      <>
        <MyNavbar />
        <Container style={{ minHeight: "100vh" }}>
          <Outlet />
        </Container>
      </>
    );
  }