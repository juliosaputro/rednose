import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NewsImg from '../assets/images/news.png';

export default function NewsItems({
    img = NewsImg,
    title = 'Project Name',
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  }) {
    return (
        <NewsItemsStyled>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </NewsItemsStyled>
    )
}

const NewsItemsStyled = styled.div`
.projectItem__img {
    width: 80%;
    height: 350px;
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
    width: 80%;
    padding: 1rem;
    gap: 3rem;
  }
  .projectItem__title {
    font-size: 2.5rem;
    color: var(--rn-blue);
    font-family: 'Poppins';
    margin-bottom: 3rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'Poppins';
    margin-top: 3rem;
    color: var(--rn-blue);
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }

`