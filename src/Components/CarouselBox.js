import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Carousel.Caption>
            <h2>Економія часу та ресурсів</h2>
            <p>Генерація тексту за допомогою штучного інтелекту значно скорочує час, який витрачається на створення унікальних текстів для кожного товару у вашому магазині.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h2>Унікальність та якість контенту</h2>
            <p>Цей інструмент здатний генерувати описи, заголовки та інші тексти, які привернуть увагу покупців та переконають їх як ваш товар.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Carousel.Caption>
            <h2>Поліпшення пошукової оптимізації</h2>
            <p>Створення унікального та інформативного контенту за допомогою генератора тексту ІІ допоможе збільшити видимість вашого магазину у пошукових системах. </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
