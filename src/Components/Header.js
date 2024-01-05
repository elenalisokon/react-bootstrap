import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark" >
          <Container >
          <Navbar.Brand href="/" >
              <img 
                src={logo}
                height="59"
                width="134"
                className="logo d-inline-block align-top"
                alt="My site"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#link">Наша команда</Nav.Link>
              <Nav.Link href="#link">Портфоліо</Nav.Link>
              <Nav.Link href="#link">Контакти</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="text"
                placeholder="Пошук"
                className="me-sm-2 input-search"
              />
            </Form>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }
}
