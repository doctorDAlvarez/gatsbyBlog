import { Link } from 'gatsby';
import React from 'react'
import { SiReact } from 'react-icons/si';
import styled from 'styled-components'


const ArticleStyle = styled.div`
    margin-bottom: 75px;
    
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
    a {
        text-decoration: none;
    }
`;

function Article({title, content, subheading}) {
    return (
        <ArticleStyle>
            <Link to="/background"> <h1 id="article">{title}</h1></Link>
            <SiReact />
            <h4>{subheading}</h4>
            <p>{content}</p>
        </ArticleStyle>
    )
}

export default Article
