import React from 'react';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';
import TitleSection from './TitleSection';
import PText from './PText';
import E4 from '../assets/images/pillars/Emergency/front/1.jpg';

export default function CovidItems() {
       return (
              <AboutStyled>
                     <TitleSection heading='COVID-19 Hygiene Kit Distribution' />
                     <div className="container">
                            <div className="top-section">
                                   <div className="left">
                                          <h2 className="about__heading">COVID-19 Hygiene Kit Distribution</h2>
                                          <div className="about__info">
                                                 <PText>During the COVID-19 pandemic, RNF has a mission to spread moreawareness regarding the importance of a healthy lifestyle. Through ourcollaboration with partners such as NIKE, Yayasan PLAN Indonesia, andNew Zealand Aid Programme to distribute Hygiene Kit and Nutrition Kitto the communities near RNF’s centers in Cilincing and Jurangmangu.It is hoped that our efforts will bring good impacts to the communitiesand serve as a reminder for everyone to keep maintaining a hygieniccondition and eating nutritious food to strengthen their immunesystems. In total, we distributed more than 2.000 hygiene kits to localcommunities, and water taps to our local governments.</PText>
                                          </div>
                                          {/* <Button btnText="Download CV" btnLink="#" /> */}
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