import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import NewsImg from '../assets/images/news.png';


export default function PillarsItems({
    img = NewsImg,
    title = 'Project Name',
  }) {
    return (
        <NewsItemsStyled>
      <Link to="/Detail" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
          <a className="projectItem__title" href='/Detail'>{title}</a>
      </div>
    </NewsItemsStyled>
    )
}

const NewsItemsStyled = styled.div`
.projectItem__img {
    width: 300px;
    height: 300px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
    //   height: 100%;
    //   width: 300px;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
      width:300px;
    font-size: 3rem;
    color: var(--rn-blue);
    font-family: 'Poppins';
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }

`