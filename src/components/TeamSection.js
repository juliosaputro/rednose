import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import TeamItems from './TeamItems';
import TitleSection from './TitleSection';
import Teamdatas from '../assets/data/Teamdatas';
import 'swiper/css';


SwiperCore.use([Navigation])

export default function TeamSection() {
    return (
        <NewsSectionStyled>
            <div className="container">
                <TitleSection subheading="Information Today" heading="Meet Our Team" />
                <div className="projects__allItems">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {Teamdatas.map((News, index) => {
                            if (index >= 15) return;
                            return (
                                <SwiperSlide key={News.id}>
                                    <TeamItems
                                        title={News.title}
                                        img={News.img}
                                        name={News.name}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </NewsSectionStyled>
    )
}


const NewsSectionStyled = styled.div`
padding: 10rem 0;
.projects__allItems {
  display: flex;
  gap: 3rem;
  margin-top: 5rem;
}
.swiper-container {
  padding-top: 8rem;
  max-width: 100%;
}
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  height: 50px;
  width: 50px;
  background: var(--rn-blue);
  z-index: 10;
  right: 60px;
  left: auto;
  top: 0;
  transform: translateY(50%);
  color: var(--gray-1);
  border-radius: 8px;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 2rem;
}
@media only screen and (max-width: 768px) {
  .projects__allItems {
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 7rem;
    gap: 5rem;
    .projectItem__img {
      width: 100%;
    }
  }
}
`