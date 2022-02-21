import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';
import TitleSection from './TitleSection';
import Logo from '../assets/images/rnflogo.png';

export default function AboutContent() {
  return (
    <>
      <AboutStyled>
        <div className="container">
          <TitleSection 
            heading='about' />
          <div className="top-section">
            <div className="left">
              {/* <p className="about__subheading">
                Hello <span>Rednose</span>
              </p> */}
              <h2 className="about__heading">REDNOSE</h2>
              <div className="about__info">
                <PText>
                  Red Nose Foundation (RNF) is a non-profit organization that
                  focuses on arts, education, and personal development based in Jakarta, Indonesia.
                  Established in 2008, we work to empower underprivileged
                  children, youth, and the communities in which they reside in reaching their dreams and improving their quality of life. 
                  <br /> <br />
                  RNF currently runs several different program for children, parents, teachers, and local communities in our two learning centers located in Cilincing, North Jakarta, and Jurangmangu, Bintaro.
                  <br />
                  <br />
                  With the gender-based approach applies in all of our programs,
                  we are hoping that our beneficiaries can be optimized their potential without gender limitation.
                </PText>
              </div>
              {/* <Button btnText="Download CV" btnLink="#" /> */}
            </div>
            <div className="right">
              <img src={Logo} alt="me" />
            </div>
          </div>
        </div>
      </AboutStyled>
    </>
  )
}

const AboutStyled = styled.div`
padding: 20rem 0 10rem 0;

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
    margin-top:30px;
    font-size: 2.8rem;
  }
  .about__info__heading {
    font-size: 3rem;
  }
}
`