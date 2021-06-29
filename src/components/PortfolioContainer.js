import React from 'react'

export const PortfolioContainer = () => {
    return (
<section className="page-section">
        <div className="flex-container">
          <a
            href="https://github.com/jonathan-jablonski"
            className="flex-item git-hub"
          >
            <div>
              <h3>GitHub Repos</h3>
              <span>HTML/CSS/JavaScript/Mongo/Express/React/Node</span>
            </div>
          </a>

          <a
            href="https://github.com/jonathan-jablonski/team-profile-generator"
            className="flex-item team-profile-generator"
          >
            <div>
              <h3>Team Profile Generator</h3>
              <span>CLI/Inquirer/Node/JavaScript</span>
            </div>
          </a>

          <a
            href="https://jonathan-jablonski.github.io/got-munchies/"
            className="flex-item got-munchies"
          >
            <div>
              <h3>"Got Munchies?" Web App</h3>
              <span>RESTful API/HTML/CSS/JavaScript</span>
            </div>
          </a>

          <a
            href="https://jonathan-jablonski.github.io/personal-work-day-scheduler/"
            className="flex-item personal-work-day-scheduler"
          >
            <div>
              <h3>Work Day Scheduler</h3>
              <span>HTML/CSS/JavaScript</span>
            </div>
          </a>

          <a href="https://podshack.herokuapp.com/" className="flex-item podshack">
            <div>
              <h4><strong>Podshack: Simple Podcast Search App</strong></h4>
              <span
                >JavaScript/Node/Express/RESTful
                API/Passport/Handlebars/MySQL2</span
              >
            </div>
          </a>

          <a
            href="https://jonathan-jablonski.github.io/code-quiz/"
            className="flex-item code-quiz"
          >
            <div>
              <h3>Coding Basics Quiz</h3>
              <span>HTML/CSS/JavaScript</span>
            </div>
          </a>

          <a href="https://j-myles.bandcamp.com/" className="flex-item music">
            <div>
              <h3>Music Compositions</h3>
              <span>Songwriter & Arranger</span>
            </div>
          </a>
        </div>
      </section>
    )
}
