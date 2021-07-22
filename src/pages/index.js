import { Link } from 'gatsby';
import React from 'react'
import styled from 'styled-components';
import Article from '../components/article';
import Layout from '../components/layout';
import resumeFile from '../images/Profile.pdf';


const AsideStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 5rem;
  color: ${props => props.theme.dark ? "antiquewhite" : "#494868"};;
  word-wrap: break-word;
  font-kerning: normal;
  font-size: smaller;
  transition: all .6s ease;
  a {
    text-decoration: none;
    color: ${props => props.theme.dark ? "lightgreen" : "#28acb4"};;
  }
  p {
    display: block;
    margin-top: 10px;
    max-width: 300px;
    line-height: 25px;
  }
`;

const ProfileImgStyle = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const LinkStyle = styled.div`
  text-align: center;
  margin-top: 80px;
  h3 {
    color: ${props => props.theme.dark ? "lightgreen" : "lightcoral"};;
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
        <ProfileImgStyle src="https://pbs.twimg.com/profile_images/1389558491245944835/7V71O-cX_400x400.jpg" alt="profile"></ProfileImgStyle>
        <p style={{display: 'block', marginLeft: 17}}>
          Shared code and ideas by <a href="https://www.twitter.com/doctordalvarez">@Diego Alvarez
          </a>
          .
          <br></br>Developer. Building cool stuff.    
        </p>
      </AsideStyle>
      </aside>
      <MainStyle>
        <Link to='/gists'><Article title="Code" subheading="custom hooks"/></Link>
        <Link to='/projects'> <Article title="Experience" subheading="🎖 projects"/> </Link>
        <Link to='/opensource'><Article title="Blog" subheading="soft-skills"/></Link>
        <Link to='/opensource'><Article title="openSource" subheading="pr / contributions"/></Link>

      </MainStyle>
      <LinkStyle>
          <a href={resumeFile} download><h3>Resume</h3></a>
        </LinkStyle>
    </Layout>

  </div>
  
  )
}

// Step 3: Export your component
export default IndexPage
