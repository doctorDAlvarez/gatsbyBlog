// Step 1: Import React
import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { FaSun } from 'react-icons/fa';
import {WiMoonWaningCrescent5} from 'react-icons/wi'
import Article from '../components/article';
import resumeFile from '../images/Profile.pdf';


const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    margin-top: 70px;
    margin-bottom: 50px;
    max-width: 600px;
    font-size: 1.1rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.dark ? "#132035" : "#cbdefb"};
    color: ${props => props.theme.dark ? "#e5fad7" : "#683982"};;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all .6s ease;
    }
    @media only screen and (max-width: 600px) {
      body {
        margin: 10vw;
      }
      
    }
  }
`;

const HeadStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
  }  
  }
  
`;
const AsideStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5rem;
  color: ${props => props.theme.dark ? "antiquewhite" : "#494868"};;
  word-wrap: break-word;
  font-kerning: normal;
  transition: all .6s ease;
  a {
    text-decoration: none;
    color: ${props => props.theme.dark ? "greenyellow" : "#ba55ad"};;
  }
  p {
    display: block;
    margin-top: 3px;
    max-width: 300px;
    line-height: 25px;
  }
`;

const ProfileImgStyle = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const LinkStyle = styled.div`
  text-align: center;
  margin-top: 80px;
  h2 {
    color: ${props => props.theme.dark ? "#e5fad7" : "#683982"};;
  }
  a {
    text-decoration: none;

  }
`;


const IndexPage = () => {
  const [theme, setTheme] = useState({
    dark: true
  });

  const handleThemeChange = ({dark}) => {
  setTheme({dark: !dark});
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeadStyle>
          <h1>neuroReact</h1>
          <div onClick={() => handleThemeChange(theme)}>
            {theme.dark ? <FaSun /> : <WiMoonWaningCrescent5 />}
          </div>
        </HeadStyle>
        <aside>
          <AsideStyle>
            <ProfileImgStyle src="https://pbs.twimg.com/profile_images/1389558491245944835/7V71O-cX_400x400.jpg" alt="profile"></ProfileImgStyle>
            <p style={{display: 'block', marginLeft: 20}}>
            Work and Ideas by <a href="https://www.twitter.com/doctordalvarez">@Diego Alvarez
            </a>
            .
            <br></br>Developer and Lover of React.
            </p>
          </AsideStyle>
        </aside>
        <main>
          <Article title="My Background" time="10min read ☕☕" content=""/>
          <Article title="Experience" time="20min read ☕☕☕" content=""/>
          <Article title="Skills" time="5min read ☕" content=""/>
          <Article title="Education" time="12min read ☕☕" content=""/>
          <LinkStyle>
            <a href={resumeFile} download><h2>Resume</h2></a>
          </LinkStyle>
    
        </main>
        <footer>

        </footer>
      </ThemeProvider>

    </div>
  
  )
}
// Step 3: Export your component
export default IndexPage