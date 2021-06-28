import React from 'react'
import resume from '../assets/images/Jonathan-Jablonski-Resume.pdf'

export const Header = () => {
    return (
    // main logo and navbar
    <header>
      <h1>Jonathan Jablonski</h1>
      <nav>
        <a href="#about">About Me</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact Me</a>
        <a
          href={resume}
          >Resume
          </a>
      </nav>
    </header>
    )
}
