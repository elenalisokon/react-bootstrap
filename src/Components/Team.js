import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

export default class Team extends Component {
  render() {
    return (
      <section className='section-team'>
        <Container>
          <h2 className='text-center m-4'>Наша команда</h2>
          <Row xs={2} md={3} className="g-4">
            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team4.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Катерина Романівна</h4></Card.Title>
                <Card.Text>
                  Директор
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team1.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Данил Крамаренко</h4></Card.Title>
                <Card.Text>
                  Менеджер проектів
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team3.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Олег Крамарчук</h4></Card.Title>
                <Card.Text>
                  Керівник SEO-відділу
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team2.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Раїса Васильчук</h4></Card.Title>
                <Card.Text>
                  Дизайнер
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team5.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Ольга Пономаренко</h4></Card.Title>
                <Card.Text>
                  Front-end, Back-end developer
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className='d-flex'>
              <Card.Img
                className='section-team-image'
                src="../assets/team6.jpg"
              />
              <Card.Body>
                <Card.Title><h4>Іван Кравченко</h4></Card.Title>
                <Card.Text>
                  Контент-менеджер
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </section>
    )
  }
}
