import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function SkillsList() {
  return (
    <Container
      className="my-4"
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Row className="justify-content-center">
        <Col>
          <Card
            style={{
              border: 'none',
            }}
          >
            <Card.Header className="bg-white">
              <h2 className="m-0">What I can bring to your company</h2>
            </Card.Header>
            <Card.Body className="bg-black text-white">
              <p>
                My experiences and education have equipped me with the following
                hard skills...
              </p>

              <ul>
                <li>
                  An integral and comprehensive understanding of core website
                  development languages including JavaScript, HTML and CSS
                </li>
                <li>Front-end development with the React js framework</li>
                <li>
                  Working knowledge of developing back-end services including
                  API development, user authentication and authorization, route
                  protection, database querying, etc.
                </li>
                <li>
                  Comprehensive experience with the MERN stack (MongoDb,
                  Express.js, React, Node.js)
                </li>
                <li>
                  Developed understanding of languages associated with backend
                  services such as SQL, Python, and Java
                </li>
                <li>
                  Extensive experience in styling websites with CSS, SCSS, and
                  CSS frameworks such as MUI and Bootstrap
                </li>
                <li>
                  In-depth and developed understanding of responsive web design
                </li>
              </ul>
              <p>and the following soft skills...</p>
              <ul>
                <li>
                  Comprehensive problem-solving methodology, with the ability to
                  break down large problems into smaller tasks
                </li>
                <li>Excellent written and verbal comunication among peers</li>
                <li>
                  The ability to work autonomously while adhering to the
                  requirements of a team
                </li>
                <li>
                  Extensive experience adhering to KPIs and quotas in order to
                  meet deadlines and performance metrics
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default SkillsList;
