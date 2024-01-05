import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <Container>
          ТОВ "Мій Сайт Груп", ЄДРПОУ 43966188 Веб-студія My Site. Створення сайтів в Україні: Київ, Запоріжжя. <br />
          2024 © Всі права захищені.
        </Container>
      </div>
    )
  }
}
