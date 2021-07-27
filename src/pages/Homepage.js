import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";
import Project from "../components/Project";

function Homepage() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
