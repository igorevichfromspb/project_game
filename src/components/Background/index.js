import { Container } from "react-bootstrap";
import "./Background.scss";

export const Background = ({ children }) => {
  return <Container className="background">{children}</Container>;
};
