import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default class Portfolio extends Component {
  render() {
    return (
      <section className='text-center section-portfolio'>
        <Container>
          <h2 className='m-5'>Портфоліо</h2>
          
          <Row xs={1} md={2} className="g-4">
            <Card className='d-flex'>
              <Card.Img
                className='section-portfolio-image'
                src="../assets/portfolio1.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Mozart Project
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-portfolio-image'
                src="../assets/portfolio2.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Startup Framework 2.0
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-portfolio-image'
                src="../assets/portfolio3.jpg"
              />
              <Card.Body>
                <Card.Text>
                  Дизайн Landing Page
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-portfolio-image'
                src="../assets/portfolio4.jpg"
              />
              <Card.Body>
                <Card.Text>
                  SMM просування
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    )
  }
}
