import { Col, Row } from "react-bootstrap";
import key from "../../resources/img/key.png";
import "./keys.scss";

const Keys = () => {
  return (
    <Row xs="auto" className="keys-wrapper g-0 flex-column align-items-center">
      <Col className="keys-remaining mb-3">
        <span className="keys-remaining_level">Level&nbsp;2</span>{" "}
        keys&nbsp;remaining
      </Col>

      <Col className="keys-group mb-3">
        <img id="keys-group_key-1" src={key} alt={key} />
        <img id="keys-group_key-2" src={key} alt={key} />
        <img id="keys-group_key-3" src={key} alt={key} />
      </Col>

      <Col className="keys-number">X 65</Col>
    </Row>
  );
};
export default Keys;
