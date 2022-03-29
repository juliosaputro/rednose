import React from 'react';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';
import TitleSection from './TitleSection';
import PText from './PText';
import E4 from '../assets/images/pillars/Sustainable/front/3.JPG';


export default function TeachersItems() {
       return (
              <AboutStyled>
                     <TitleSection heading='Teachers Training' />
                     <div className="container">
                            <div className="top-section">
                                   <div className="left">
                                          <h2 className="about__heading">Teachers Training</h2>
                                          <div className="about__info">
                                                 <PText>Other than staying connected with our students and their parents, RNF also actively organizes workshops for teachers near our centers in Cilincing and Bintaro to introduce creative teaching methods and innovative curriculum in schools. We believe that teachers play a very important role in creating more quality education. The purpose of this workshop is to help teachers in creating more exciting lessons in the classroom which are relevant in today’s context and fulfills the students’ needs. In 2017, RNF flew to Central and South Sulawesi to hold sports teachers' training. And regularly 2 times a year, Sports Teachers Training is given to Cilincing and Jurangmangu, where our centers are located. In 2018, we also train experimental learning for science teachers and in 2019, we hold Digital Literacy Training for more than 150 teachers.</PText>
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