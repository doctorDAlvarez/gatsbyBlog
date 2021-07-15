import React, { useState } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FaSun } from 'react-icons/fa';
import {WiMoonWaningCrescent5} from 'react-icons/wi'
import { Link } from 'gatsby';
import {SiGithub, SiLinkedin, SiTwitter} from 'react-icons/si'


const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    margin-top: 70px;
    margin-bottom: 50px;
    max-width: 600px;
    font-size: 1.1rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.dark ? "#132035" : "#cbdefb"};
    color: ${props => props.theme.dark ? "#e5fad7" : "#243046"};;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    transition: all .6s ease;
    }
    @media only screen and (max-width: 600px) {
      body {
        margin: 10vw;
      } 
    }
 `; 

 const HeadStyle = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-bottom: 2rem;
 
 button {
     margin: auto 0;
     background: transparent;
     border: 0 none;
     color: inherit;
     svg {
         width: 1.3rem;
         height: 1.3rem;
     }
    } 
`;
const FooterStyle = styled.footer`
    margin: auto;
    display: flex;
    max-width: 10vw;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
`;

function Layout({children}) {
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
                <Link style={{color: 'inherit', textDecoration: 'none'}}to="/"><h1>neuroReact</h1></Link>
                <button onKeydown={() => handleThemeChange(theme)} onClick={() => handleThemeChange(theme)}>
                    {theme.dark ? <FaSun /> : <WiMoonWaningCrescent5 />}
                </button>
            </HeadStyle>
            {children}
            <FooterStyle>
                <SiGithub />
                <SiLinkedin />
                <SiTwitter />
            </FooterStyle>
        </ThemeProvider>
        </div>
    )
}

export default Layout