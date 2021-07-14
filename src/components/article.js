import React from 'react'
import styled from 'styled-components'


const ArticleStyle = styled.div`
    margin-bottom: 75px;
    h1, h6, p {
        margin: 10px 10px;
    }
    #article {
        letter-spacing: 0.5rem;
        color: ${props => props.dark ? "#fad7e3" : "#494868"};
    }

`;

function Article({title, time, content}) {
    return (
        <ArticleStyle>
            <h1 id="article">{title}</h1>
            <h6>{time}</h6>
            <p>{content}</p>
        </ArticleStyle>
    )
}

export default Article
