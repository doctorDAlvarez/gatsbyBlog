// Step 1: Import React
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
    color: ${props => props.theme.dark ? "greenyellow" : "#ba55ad"};;
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
  h2 {
    color: ${props => props.theme.dark ? "#e5fad7" : "#683982"};;
  }
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
          Work and Ideas by <a href="https://www.twitter.com/doctordalvarez">@Diego Alvarez
          </a>
          .
          <br></br>Developer and Lover of React.
        </p>
      </AsideStyle>
      </aside>
      <main>
        <Article title="My Background" 
        time="10min read ☕☕" 
        content=""
        subheading="A little history about myself"  
        />
        <Article title="Experience" time="20min read ☕☕☕" content=""/>
        <Article title="Skills" time="5min read ☕" content=""/>
        <Article title="Education" time="12min read ☕☕" content=""/>
      </main>
      <footer>
        <LinkStyle>
        <a href={resumeFile} download><h2>Resume</h2></a>
        </LinkStyle>
      </footer>
    </Layout>

  </div>
  
  )
}

// Step 3: Export your component
export default IndexPage
