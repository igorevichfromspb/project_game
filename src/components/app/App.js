import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./app.scss";
import Keys from "../keys/Keys";
import { KeyGroup } from "../KeyGroup";
import Levels from "../levels/Levels";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Background } from "../Background";
import { KeyBar } from "../KeyBar";

function App() {
  return (
    <div className="App">
      <Header />
      <Container fluid className="py-4">
        <Background>
          <Row className="flex-nowrap">
            <Col xs={3}></Col>
            <Col xs={6}>
              <Row xs="auto" className="flex-column align-items-center gy-4">
                <Col>
                  <Levels />
                </Col>
                <Col>
                  <KeyBar />
                </Col>
                <Col>
                  <KeyGroup
                    openKeys={{ 1: true, 2: false, 3: false, 4: false }}
                  />
                </Col>
              </Row>
            </Col>
            <Col xs={3}>
              <Keys />
            </Col>
          </Row>
        </Background>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
