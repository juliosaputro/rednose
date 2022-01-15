import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';

export default function TeamItems({
  img = NewsImg,
  name = 'Nama',
  title = 'Project Name',
}) {
  return (
    <TeamItemsStyled>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <h3 className="projectItem__name">{name}</h3>
        <h6 className="projectItem__title">{title}</h6>
      </div>
    </TeamItemsStyled>
  )
}

const TeamItemsStyled = styled.div`
.projectItem__img {
    width: 100%;
    height: 370px;
    border-radius: 50%;
    background-color: var(--rn-primary);
    overflow: hidden;
    display: inline-block;
    img {

    }
  }
  .projectItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
  }
  .projectItem__name {
    font-size: 2.5rem;
    color: var(--rn-blue);
    font-family: 'Poppins';
    left: -20px;
  }
  .projectItem__title {
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