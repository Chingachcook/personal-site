import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Chingiz Batyrbayev</h2>
        <p><a href="mailto:batirbaevchingiz@gmail.com">batirbaevchingiz@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Chingiz. I like building things.
        I am a <a href="https://bil.edu.kz/ru/object/litsej-internat-bilim-innovatsiya-3/">Kazakh Turkish High School</a> graduate,
        <a href="https://satbayev.university/">Satbayev University</a> Alumni. Now I am a software developer at <a href="https://dnapayments.com/">DNA payments</a>
        . Before DNA payments I was
        at <a href="https://www.epam-group.ru/">EPAM</a>
        , <a href="https://altyn-i.kz">Altyn-i</a>
        , and <a href="https://www.an-nisa.kz/">An-nisa</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Chingiz Batyrbayev <Link to="/">jsts.kz</Link>.</p>
    </section>
  </section>
);

export default SideBar;
