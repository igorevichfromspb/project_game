import { Container, Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import "./header.scss";

const Header = () => {
  return (
    <Container fluid>
      <Container className="py-3">
        <Row xs="auto" className="gx-5 justify-content-end align-items-center">
          <Col className="nav-link" href="#">
            Home
          </Col>
          <Col className="nav-link" href="#">
            Game
          </Col>
          <Col className="nav-link" href="#">
            Vault
          </Col>
          <Col className="nav-link" href="#">
            Scoreboard
          </Col>
          <Col>
            <Button>Connect wallet</Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;
