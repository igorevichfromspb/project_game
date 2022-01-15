import twitter from "../../resources/img/twitter.svg";
import discord from "../../resources/img/discord.svg";
import telegram from "../../resources/img/telegram.svg";
import instagram from "../../resources/img/instagram.svg";
import "./footer.scss";
import { Container, Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid>
      <Container className="py-4">
        <Row>
          <Col xs={4}></Col>

          <Col xs={4}>
            <Row>
              <Col>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <img src={discord} alt="discord" />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <img src={telegram} alt="telegram" />
                </a>
              </Col>
              <Col>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </Col>
            </Row>
          </Col>

          <Col xs={4} className="d-flex align-items-center justify-content-end">
            <a className="smart-contract-link" href="#">
              Smart contract
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Footer;
