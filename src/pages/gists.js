import React from 'react'
import Layout from '../components/layout';
import Gist from 'react-gist';
import styled from 'styled-components';



const GistStyle = styled.div`
  margin: auto;
  font-family: monospace;
  box-sizing: border-box;
  color: ${props => props.theme.dark ? "white" : "#28acb4"};
  button {
    font-family: monospace;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
    cursor: pointer;
    padding: 5px 20px;
    background-color: ${props => props.theme.dark ? "darkorchid" : "#4E446D"};
    color: white;
    border: transparent;
    :hover {
      background-color: gainsboro;
      color: black;
      transform: translateX(10%)
    }
  }
  p {
    font-size: smaller;
  }
`;

const Gists = () => {
  const [id, setId] = React.useState(0)
  const handlePage = () => {
    setId(prev => {
      if (prev === 2) {
        return 0
      }
      else {
        return prev + 1
      }
    })
}
  const gists = [
    'b6e25c8deb86003d85518b16236aa912',
    '4b05d4e7279fdad69cc10ad784b538da',
    'b22a4733d8ba3fc2028d4e4f5bd3104e'
  ]
  const content = [
    {
      title: 'useAsync', 
      desc: 'custom hook to manage async operations, while keeping unmounted request safe'},
    {
      title: 'useProvideAuth', 
      desc: 'manage authentication and handle cookies'},
    {
      title: 'useLocalStorage', 
      desc: 'localStorage API simple mgmt'}
  ]

  return (
    <div>
    <Layout>
    <GistStyle>
      <h3>{content[id].title}</h3>
      <p>{content[id].desc}</p>
      <button type='button' onClick={() => handlePage()}>➤</button>
    </GistStyle>
      <Gist id={gists[id]}/>
    </Layout>

    </div>
  
  )
}


export default Gists