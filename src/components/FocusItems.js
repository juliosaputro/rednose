import React from 'react';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';
import TitleSection from './TitleSection';
import PText from './PText';
import E4 from '../assets/images/pillars/Sustainable/front/1.jpg';

export default function FocusItems() {
       return (
              <AboutStyled>
                     <TitleSection heading='Focus Group Discussion And Seminars' />
                     <div className="container">
                            <div className="top-section">
                                   <div className="left">
                                          <h2 className="about__heading">Focus Group Discussion And Seminars</h2>
                                          <div className="about__info">
                                                 <PText>The Large Scale Social Restriction (PSBB) which has been implemented in Jakarta several times in 2021 due to the COVID-19 outbreak makes it difficult for us to conduct our programs offline. However, RNF is still committed to supporting our local communities in this difficult time by facilitating several online Focus Group Discussions. For example the bimonthly supporting group discussions with the RPTRA’s representatives and peer-to-peer group discussions, where children can have a safe space to express their feelings and thoughts. Previously, we have successfully conducted this program through our Coaching for Life (COOL) Project from August 2019 to July 2020 together with Save the Children (STC) as our partner.</PText>
                                          </div>
                                   </div>
                                   <div className="right">
                                          <img src={E4} alt="me" />
                                   </div>
                            </div>
                     </div>
              </AboutStyled>
       )
}

const AboutStyled = styled.div`
.section-title{
  border-bottom: 5px solid red;
  border-top: 5px solid red;
    h2{
       color: var(--rn-blue);  
    }
  }
.container{
  background: var(--white);
  padding: 10rem;
  margin: 50px;
  border-radius: 25px;
}
.top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}
.left {
  flex: 3;
}
.right {
  flex: 2;
}
.about__subheading {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  span {
    background-color: var(--rn-primary);
    padding: 0.5rem;
    border-radius: 8px;
  }
}
.about__heading {
  font-size: 3.6rem;
  margin-bottom: 3rem;
  color: var(--rn-blue);
}
.about__info {
  margin-bottom: 4rem;
  .para {
    max-width: 100%;
    p{
      color: var(--rn-blue);
    }
  }
}
@media only screen and (max-width: 768px) {
  padding: 10rem 0;
  .top-section {
    flex-direction: column;
    gap: 5rem;
  }
  .about__subheading {
    font-size: 1.8rem;
  }
  .about__heading {
    font-size: 2.8rem;
  }
  .about__info__heading {
    font-size: 3rem;
  }
}
`