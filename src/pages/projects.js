// Step 1: Import React
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout';


const ProjectStyle = styled.div`
  --initialTextColor: #FFF;
  --slideTextColor: #272838;

  --initialBgColor: transparent;
  --slideBgColor: #272838;
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: auto;
  border: 1px solid grey;
  margin: 15px;
  margin-top: 50px;
  padding: 50px;
  /* transition: ease-in-out 2ms all; */
  color: var(--initialTextColor);
  background-image: linear-gradient(90deg,
      var(--initialBgColor) 0%,
      var(--initialBgColor) 50%,
      var(--slideBgColor) 50%,
      var(--slideBgColor) 100%);
  background-size: 200%;
  transition: background-position .2s cubic-bezier(.47, .1, 1, .63),
    color .2s linear;
  transition-delay: 0.0s, 0.15s;
  

  :hover {
    box-shadow: ${props => props.theme.dark ? "0 0 1px 1px greenyellow" : "0 0 1px 1px lightpink"}; 
    color: var(--slideTextColor);
    cursor: pointer;
    background-position: -100% 100%;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.dark ? "white" : "#28acb4"};
  }
`;


const Projects = () => {

  return (
    <div>
    <Layout>
      <ProjectStyle>
      <a href="https://github.com/doctorDAlvarez/campus-App">
        <h3>Campus Online</h3>
        <p>Built with React Hooks.</p>
        <ul>
          <li>State Mgmt</li>
          <li>Authentication</li>
          <li>Context API</li>
          <li>Async/await API data handling</li>
          <li>js-cookie</li>
          <li>react-router / dom API</li>
          <li>Private routes</li>
          <li>bcrypt.js</li>
          <li>CRUD operations / sequelize ORM</li>
          <li>ErrorBoundary API</li>
          <li>Testing: jest/user-event/react</li>
          <li>Full Stack App</li>
        </ul>
      </a>
      </ProjectStyle>
      <ProjectStyle>
      <a href="https://cool-portfolio-d9hwmca4a-doctordalvarez.vercel.app/">
        <h3>Client Portfolio</h3>
        <p>Built with React.</p>
        <ul>
          <li>Styled Components</li>
          <li>Hooks patterns</li>
          <li>Context API</li>
          <li>HTML5/CSS3</li>
          <li>Responsive design</li>
        </ul>
      </a>
      </ProjectStyle>
      <ProjectStyle>
      <a href="https://react-directory-ogj2wlsa8-doctordalvarez.vercel.app/">
        <h3>React Directory</h3>
        <p>Built with React.</p>
        <ul>
          <li>Basic State mgmt</li>
          <li>Class components</li>
          <li>Functional programming</li>
          <li>Conditional Rendering</li>
          <li>Refs</li>
        </ul>
      </a>
      </ProjectStyle>
      <ProjectStyle>
      <a href="https://gallery-app-chi.vercel.app/">
        <h3>Gallery</h3>
        <p>Built with React.</p>
        <ul>
          <li>Hooks pattern and design</li>
          <li>Dynamic Search feature</li>
          <li>Fetch API, Async programming</li>
        </ul>
      </a>
      </ProjectStyle>
      <ProjectStyle>
      <a href="https://github.com/doctorDAlvarez/neuroreactv2theme">
        <h3>Personal Custom VS Code Theme</h3>
        <p>Based in Night Owl</p>
        <ul>
          <li>Customized colors using token based configuration</li>
          <li>Cool theme for my personal use</li>
          <li>Feel free to send me tips</li>
        </ul>
      </a>
      </ProjectStyle>
    </Layout>

    </div>
  
  )
}

export default Projects