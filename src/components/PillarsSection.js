import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import PillarsItems from './PillarsItems';
import TitleSection from './TitleSection';
import {Educationdatas,Emergencydatas,Sustaindatas,Youthdatas} from '../assets/data/Pillarsdatas'
import 'swiper/swiper-bundle.min.css';


SwiperCore.use([Navigation])
export default function PillarsSection() {
    return (
        <NewsSectionStyled>
            <div className="container">
                <div className="projects__allItems">
                <TitleSection subheading="Information Today" heading="Education for Childern" />
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
                        {Educationdatas.map((News, index) => {
                            if (index >= 5) return;
                            return (
                                <SwiperSlide key={News.id}>
                                    <PillarsItems
                                        title={News.title}
                                        img={News.img}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="projects__allItems">
                <TitleSection subheading="Information Today" heading="Youth Empowerment" />
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
                        {Youthdatas.map((News, index) => {
                            if (index >= 5) return;
                            return (
                                <SwiperSlide key={News.id}>
                                    <PillarsItems
                                        title={News.title}
                                        img={News.img}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="projects__allItems">
                <TitleSection subheading="Information Today" heading="Sustainable Comunity" />
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
                        {Sustaindatas.map((News, index) => {
                            if (index >= 5) return;
                            return (
                                <SwiperSlide key={News.id}>
                                    <PillarsItems
                                        title={News.title}
                                        img={News.img}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="projects__allItems">
                <TitleSection subheading="Information Today" heading="Emergency Response" />
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
                        {Emergencydatas.map((News, index) => {
                            if (index >= 3) return;
                            return (
                                <SwiperSlide key={News.id}>
                                    <PillarsItems 
                                        title={News.title}
                                        img={News.img}
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
  background: transparent;
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
  font-size:0;
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