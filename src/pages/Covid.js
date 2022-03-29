import React from 'react'
import styled from 'styled-components';
import CovidItems from '../components/CovidItems';

export default function Covid() {
  return (
    <ScholarshipSectionStyled>
           <CovidItems/>
    </ScholarshipSectionStyled>
  )
}


const ScholarshipSectionStyled = styled.div`
       padding: 10rem 0;
       background: var(--rn-primary);
       display:flex;
       justify-content:center;
       .projects__allItems {
              margin-top: 5rem;
              .section-title{
              border-bottom: 5px solid red;
              border-top: 5px solid red;
                h2{
                   color: var(--rn-blue);  
                }
              }
       }
`