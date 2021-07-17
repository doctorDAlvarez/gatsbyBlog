import React, { useState, useRef, useEffect } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { FaSun } from 'react-icons/fa';
import {WiMoonWaningCrescent5} from 'react-icons/wi'
import { Link } from 'gatsby';
import {SiGithub, SiLinkedin, SiTwitter} from 'react-icons/si'
import VanillaTilt from 'vanilla-tilt';

const GlobalStyle = createGlobalStyle`
  body {
    margin: auto;
    margin-top: 70px;
    margin-bottom: 50px;
    max-width: 600px;
    font-size: 1.1rem;
    box-sizing: border-box;
    background-color: ${props => props.theme.dark ? "#132035" : "#eff9ff"};
    color: ${props => props.theme.dark ? "#e5fad7" : "#4E446D"};;
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
    a {
        color: inherit;
    }
    svg {
        padding: 10px;
    }
    }
`;

function Layout({children}) {
    const [theme, setTheme] = useState({
        dark: true
        });

        const handleThemeChange = ({dark}) => {
        setTheme({dark: !dark});
        };
    const tiltRef = useRef()

    useEffect(() => {
        const tiltNode = tiltRef.current
        VanillaTilt.init(tiltNode, {
            max: 35,
            speed: 200,
            glare: 0,
        })
        return () => {
            tiltNode.vanillaTilt.destroy()
        }
    }, [])
    
    return (
        <div>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <HeadStyle >
                <Link  ref={tiltRef} style={{transition: 'ease .1ms', color: 'inherit', textDecoration: 'none',}}to="/"><h1>neuroReact</h1></Link>
                <button onKeyDown={() => handleThemeChange(theme)} onClick={() => handleThemeChange(theme)}>
                    {theme.dark ? <FaSun /> : <WiMoonWaningCrescent5 />}
                </button>
            </HeadStyle>
            {children}
            <FooterStyle>
                <Link to="https://www.github.com/doctordalvarez"><SiGithub /></Link>
                <Link to="https://www.linkedin.com/in/doctordalvarez"><SiLinkedin /></Link>
                <Link to="https://www.twitter.com/doctordalvarez"><SiTwitter /></Link>
            </FooterStyle>
        </ThemeProvider>
        </div>
    )
}

export default Layout