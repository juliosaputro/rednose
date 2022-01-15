import React from 'react';
import styled from 'styled-components';

export default function TitleSection({
    subheading = 'Need Subheading',
    heading = 'need heading',
}) {
    return (
        <TitleSectionStyled className="section-title">
            <h2>{heading}</h2>
        </TitleSectionStyled>
    )
}

const TitleSectionStyled = styled.div`
text-align: center;
h2 {
  font-family: 'Poppins';
  font-size: 6rem;
  font-weight: bold;
  margin-top: 0.5rem;
  text-transform: uppercase;
  color: var(--rn-blue);
}
@media only screen and (max-width: 768px) {
  text-align: center;
  p {
    font-size: 1.2rem;
  }
  h2 {
    font-size: 3.6rem;
  }
}
`;