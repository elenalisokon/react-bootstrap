import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class About extends Component {
  render() {
    return (
      <section className='text-center section-about'>
        <Container>
          <h1 className='m-4'>Веб студія My Site</h1>
          <p>Привіт! Ми динамічне агентство інтернет-маркетингу, що спеціалізується на створенні якісних веб-сайтів, результативному SEO просуванні та ефективній рекламі в інтернет</p>
          <p>Наша студія веб дизайну надає повний спектр послуг з розробки сайтів будь-якого рівня складності, починаючи від традиційних односторінкових «візиток» і закінчуючи об’ємними інформаційними порталами зі складною версткою або B2B майданчиками для ефективної онлайн торгівлі.</p>
        </Container>
      </section>
    )
  }
}
