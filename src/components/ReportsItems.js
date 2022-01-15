import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';

export default function ReportsItems({
  img = NewsImg,
  title = 'Project Name',
  link = 'link'
}) {
  return (
    <TeamItemsStyled>
      <div className="projectItem__img">
        <img src={img} alt="project img" />
      </div>
      <div className="projectItem__info">
        <a href={link} className="projectItem__title">{title}</a>
      </div>
    </TeamItemsStyled>
  )
}

const TeamItemsStyled = styled.div`
.projectItem__img {
  width: 100%;
  height: 500px;
  border-radius: 12px;
  overflow: hidden;
  display: inline-block;
  border: 3px solid var(--gray-2);
  img {
    height: 100%;
  }
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
    height: 350px;
  }
}


`