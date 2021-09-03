import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Article from "../components/article";
import Layout from "../components/layout";
import resumeFile from "../images/Profile.pdf";
import profileimg from "../images/profileimg.jpeg";

const AsideStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
  color: ${(props) => (props.theme.dark ? "antiquewhite" : "#494868")};
  word-wrap: break-word;
  font-kerning: normal;
  font-size: smaller;
  transition: all 0.6s ease;
  a {
    text-decoration: none;
    color: ${(props) => (props.theme.dark ? "lightgreen" : "#28acb4")};
  }
  p {
    display: block;
    margin-top: 2px;
    max-width: 300px;
    line-height: 25px;
  }
`;

const ProfileImgStyle = styled.img`
  border-radius: 20%;
  width: 100px;
`;

const LinkStyle = styled.div`
  text-align: center;
  margin-top: 80px;
  h3 {
    color: ${(props) => (props.theme.dark ? "lightgreen" : "lightcoral")};
  }
  a {
    text-decoration: none;
  }
`;
const MainStyle = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  a {
    text-decoration: none;
  }
`;

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <aside>
          <AsideStyle>
            <ProfileImgStyle src={profileimg} alt="profile"></ProfileImgStyle>
            <p style={{ display: "block", marginLeft: 17 }}>
              Shared code and ideas by{" "}
              <a href="https://www.twitter.com/doctordalvarez">
                @Diego Alvarez
              </a>
              .<br></br>Developer, <i>thinking</i> in React.
            </p>
          </AsideStyle>
        </aside>
        <MainStyle>
          <a href="https://gist.github.com/doctorDAlvarez">
            <Article title="Code" subheading="components - hooks" />
          </a>
          <Link to="/projects">
            {" "}
            <Article title="Work" subheading="projects" />{" "}
          </Link>
          <a href="https://doctordalvarez.hashnode.dev/">
            <Article title="Social" subheading="soft-skills" />
          </a>
          <Link to="/animations">
            <Article title="Animations" subheading=" (🛠) Spring" />
          </Link>
        </MainStyle>
        <LinkStyle>
          <a href={resumeFile} download>
            <h3>Resume</h3>
          </a>
        </LinkStyle>
      </Layout>
    </div>
  );
};

// Step 3: Export your component
export default IndexPage;
