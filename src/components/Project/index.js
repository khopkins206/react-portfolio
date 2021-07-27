import React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import marvelImg from "./marvel-details.png";
import lineupImg from "./lineup-home.png";
import weatherImg from "./weather-dashboard.png";
import employeeImg from "./employee-tracker.png";
import teamProfile from "./team.png";
import backendImg from "./backend.png";

function Project() {
  return (
    <CardGroup>
      <Row>
        {/* {Array.from({ length: 3 }).map((_, idx) => ( */}
        <Col lg={3} md={3}>
          <Card className="text-center">
            <Card.Img variant="top" src={lineupImg} />
            <Card.Body>
              <Card.Title>LineUp</Card.Title>
              <Card.Text></Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/LineUp-V2"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={teamProfile} />
            <Card.Body>
              <Card.Title>Team Profile Generator</Card.Title>
              <Card.Text>
                This application is used to allow the team manager to create an
                easily read group of cards with info on each employee on their
                team
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/team-profile-generator"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={backendImg} />
            <Card.Body>
              <Card.Title>E-Commerce Back End</Card.Title>
              <Card.Text>
                The E-Commerce Backend is a web application that utilizes a
                backend server created with Express, MySQL, and Sequelize
                through Object-Relational Mapping.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/ecommerce-backend"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={marvelImg} />
            <Card.Body>
              <Card.Title>Marvel Quiz</Card.Title>
              <Card.Text>
                I collaborated with a team of 3 to create this in 1.5 weeks. We
                used HTML, CSS, Materialize, and Javascript to create this quiz.
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/superhero-quiz"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={weatherImg} />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                This application is used to display the current weather and
                forecast of weather for searched city
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/weather-dashboard"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
          <Card className="text-center">
            <Card.Img variant="top" src={employeeImg} />
            <Card.Body>
              <Card.Title>Employee Tracker</Card.Title>
              <Card.Text>
                This application is used to add, update, and display the current
                employees in your company
              </Card.Text>
              <Button
                variant="primary"
                href="https://github.com/khopkins206/employee-tracker"
                target="_blank"
              >
                Check out the repo!
              </Button>
            </Card.Body>
          </Card>
        </Col>
        {/* )) */}
      </Row>
    </CardGroup>
  );
}

export default Project;
