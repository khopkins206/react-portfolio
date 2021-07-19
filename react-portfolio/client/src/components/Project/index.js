import React from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

function Project() {
  return (
    <CardColumns>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>LineUp</Card.Title>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Team Profile Generator</Card.Title>
          <Card.Text>
            This application is used to allow the team manager to create an
            easily read group of cards with info on each employee on their team
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>E-Commerce Back End</Card.Title>
          <Card.Text>
            The E-Commerce Backend is a web application that utilizes a backend
            server created with Express, MySQL, and Sequelize through
            Object-Relational Mapping.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Marvel Quiz</Card.Title>
          <Card.Text>
            I collaborated with a team of 3 to create this in 1.5 weeks. We used
            HTML, CSS, Materialize, and Javascript to create this quiz.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
            This application is used to display the current weather and forecast
            of weather for searched city
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Employee Tracker</Card.Title>
          <Card.Text>
            This application is used to add, update, and display the current
            employees in your company
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  );
}

export default Project;
