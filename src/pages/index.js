// Step 1: Import React
import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    margin-top: 25px;
    width: 600px;
    box-sizing: border-box;
    background-color: ${props => props.theme.dark ? "#132035" : "#dee8f7"};
    color: ${props => props.theme.dark ? "antiquewhite" : "#494868"};;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;

const HeadStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
const AsideStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
  color: ${props => props.theme.dark ? "antiquewhite" : "#494868"};;
  word-wrap: break-word;
  font-kerning: normal;
  a {
    text-decoration: underline;
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
          <h1>Neuroreact</h1>
          <div>
            <button onClick={e => handleThemeChange(theme)}>Mode</button>  
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

        </main>
        <footer>

        </footer>
      </ThemeProvider>

    </div>
  
  )
}
// Step 3: Export your component
export default IndexPage