import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';

export default function ContactBanner() {
    return (
        <ContactBannerStyled>
            <div className="container">
                <div className="contactBanner__wrapper">
                    <PText>Any Question ?</PText>
                    <h3 className="contactBanner__heading">Let me help you</h3>
                    <Button btnText="Contact Now" btnLink="/contact" />
                </div>
            </div>
        </ContactBannerStyled>
    )
}

const ContactBannerStyled = styled.div`
padding: 5rem 0;
.contactBanner__wrapper {
  background-color: var(--rn-blue);
  border-radius: 12px;
  padding: 5rem 0rem;
  text-align: center;
}
.contactBanner__heading {
  font-size: 4rem;
  margin-bottom: 2rem; 
}
@media only screen and (max-width: 768px) {
  .contactBanner__heading {
    font-size: 2.8rem;
  }
}
`