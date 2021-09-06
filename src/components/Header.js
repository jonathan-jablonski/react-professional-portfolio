import React from 'react';
import resume from '../assets/images/Jonathan-Jablonski-Resume.pdf';
import { About } from './About';
import { state } from '../App';
import { loadAbout } from '../App';

export const Header = () => {
  let state;
    return (
    // main logo and navbar
    <header>
      <h1>Jonathan Jablonski</h1>
      <nav>
        <button onClick={() => { loadAbout() }}>About</button>
        <a href="/work">Work</a>
        <a href="/contact">Contact Me</a>
        <a
          href={resume}
          >Resume
          </a>
      </nav>
    </header>
    )
}
