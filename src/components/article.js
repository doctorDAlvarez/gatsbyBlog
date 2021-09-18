import React from "react";
import { SiReact } from "react-icons/si";
import styled from "styled-components";

const ArticleStyle = styled.div`
  margin-bottom: 45px;
  padding: 20px;
  color: ${(props) => (props.theme.dark ? "white" : "#28acb4")};

  h1,
  h6,
  h4,
  p {
    margin: 10px 0;
  }
  h1:hover {
    color: ${(props) => (props.theme.dark ? "lightpink" : "#28acb4")};
  }
  h1 {
    letter-spacing: 0.1rem;
    color: ${(props) => (props.theme.dark ? "#8396a6" : "#243046")};
  }
  h4 {
    color: ${(props) => (props.theme.dark ? "lightcoral" : "gray")};
  }

  @media screen and (max-width: 700px) {
    text-align: center;
    h1 {
      width: 100%;
      margin: auto;
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

function Article({ title, subheading }) {
  return (
    <ArticleStyle>
      <h1 id={`${title}`}>{title}</h1>
      <SiReact />
      <h4>{subheading}</h4>
    </ArticleStyle>
  );
}

export default Article;
