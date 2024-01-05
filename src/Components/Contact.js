import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { EnvelopeAt, GeoAltFill, Headset } from 'react-bootstrap-icons';

export default class Contact extends Component {
  render() {
    return (
      <section className='section-contact'>
        <Container>
          <Row>
            <Col className='contact-info' sm>
              <h2>Контакти веб-студії</h2>
              <a href="tel:+380444953180"><Headset /> +38 (044) 495-31-80</a><br />
              <a href="mailto:contact@mysite.com"><EnvelopeAt /> contact@mysite.com</a> <br />
              <span><GeoAltFill /> проспект Соборний, 183, Запоріжжя, 69061 </span>
            </Col>
            <Col sm>
              <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4249.238270010724!2d35.09286559986446!3d47.86182195580813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dc66cf8212da69%3A0x954a449b1177b085!2z0JrQvtC90YbQtdGA0YLQvdCwINC30LDQu9CwINGW0LwuINCT0LvRltC90LrQuA!5e0!3m2!1suk!2sua!4v1704461409198!5m2!1suk!2sua" width="100%" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
