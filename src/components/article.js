import { Link } from 'gatsby';
import React from 'react'
import { SiReact } from 'react-icons/si';
import styled from 'styled-components'


const ArticleStyle = styled.div`
    margin-bottom: 45px;
    padding: 20px;
    min-width: 300px;
    
    h1, h6, h4, p {
        margin: 10px 0;
    }
    h1:hover {
        color: ${props => props.theme.dark ? "lightpink" : "#28acb4"};

    }
    h1 {
        max-width: fit-content;
        letter-spacing: 0.1rem;
        color: ${props => props.theme.dark ? "#545b61" : "#243046"};
    }
    h4 {
        color: ${props => props.theme.dark ? "lightcoral" : "gray"};
        
    }
`;

function Article({title, subheading}) {
    return (
        <ArticleStyle>
            <h1 id={`${title}`}>{title}</h1>
            <SiReact style={{color: 'white'}}/>
            <h4>{subheading}</h4>
        </ArticleStyle>
    )
}

export default Article
