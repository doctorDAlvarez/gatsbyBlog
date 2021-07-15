import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components'


const ArticleStyle = styled.div`
    margin-bottom: 75px;
    h1, h6, h4, p {
        margin: 10px 0;
    }
    #article {
        letter-spacing: 0.3rem;
        color: ${props => props.dark ? "#fad7e3" : "#494868"};
    }
    a {
        text-decoration: none;
    }
`;

function Article({title, time, content, subheading}) {
    return (
        <ArticleStyle>
            <Link to="/background"> <h1 id="article">{title}</h1></Link>
            <h6>{time}</h6>
            <h4>{subheading}</h4>
            <p>{content}</p>
        </ArticleStyle>
    )
}

export default Article
