import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';

export default function DonorsItems({
  img = NewsImg,
}) {
  return (
    <TeamItemsStyled>
      <div className="projectItem__img">
        <img src={img} width={30} alt="project img" />
      </div>
    </TeamItemsStyled>
  )
}

const TeamItemsStyled = styled.div`
.projectItem__img {
  padding: 20px;
  overflow: hidden;
  display: inline-block;
}
.projectItem__info {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
}
.projectItem__title {
  font-size: 2.5rem;
  color: var(--rn-blue);
  font-family: 'Poppins';
}
.projectItem__desc {
  font-size: 1.6rem;
  font-family: 'Poppins';
  margin-top: 1rem;
  color: var(--rn-blue);
}
@media only screen and (max-width: 768px) {
  .projectItem__img {
    // height: 100px;
    // width: 150px;

  }
}
`