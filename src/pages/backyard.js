// Step 1: Import React
import React from 'react'
import styled from 'styled-components';
import Layout from '../components/layout';


const Background = () => {

  const LineStyle = styled.div`
    position: absolute; 
    display: inline-block;
    width: 1px;
    height: 300px;
    background-color: goldenrod;
    box-shadow: 0 0 10px 2px green; 
  `;
  return (
    <div>
    <Layout>
    </Layout>
    </div>
  
  )
}

export default Background