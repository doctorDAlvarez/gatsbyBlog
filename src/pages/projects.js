// Step 1: Import React
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout';


const ProjectStyle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Courier New', Courier, monospace;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
  border: 1px solid grey;
  margin: 15px;
  margin-top: 50px;
  padding: 50px;
  transition: ease-in-out 2ms all;
  :hover {
    box-shadow: 0 0 2px 2px greenyellow;
    color: white;
  }
`;


const Projects = () => {

  return (
    <div>
    <Layout>
      <ProjectStyle>
        <h3>Campus Online</h3>
        <p>Built with React Hooks.</p>
        <ul>
          <li>Authentication state mgmt - useAuth</li>
          <li>Context API - useContext</li>
          <li>Async/await API data handling</li>
          <li>js-cookie</li>
          <li>react-router / dom API</li>
          <li>Private routes</li>
          <li>bcrypt.js</li>
          <li>CRUD operations / sequelize ORM</li>
          <li>ErrorBoundary API</li>
          <li>Testing: jest/user-event/react</li>
        </ul>
      </ProjectStyle>
      <ProjectStyle>
        <h3>Robotic Search App</h3>
        <p>Built with React.</p>
        <ul>
          <li>Search feature</li>
          <li>Fetch API</li>
          <li>Functional programming</li>
          <li>Conditional Rendering</li>
          <li>Basic State mgmt</li>
          <li>Class components</li>
        </ul>
      </ProjectStyle>
    </Layout>

    </div>
  
  )
}

export default Projects