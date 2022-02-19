import React from 'react';
import styled from 'styled-components';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import DonorsItems from './DonorsItems';
import Donorsdatas from '../assets/data/Donorsdatas';
import {Partnerssatu, Partnersdua } from '../assets/data/Partnersdatas';
import TitleSection from './TitleSection';
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Autoplay])

export default function DonorsSection() {
       return (
              <NewsSectionStyled>
              <div className="container">
                  <TitleSection subheading="Information Today" heading="Donors And Partner" />
                  {/* <div className="projects__allItems"> */}
                      <Swiper
                          slidesPerView={1}
                            autoplay={{
                                    delay: 5000,
                                    disableOnInteraction: false
                                }}
                          breakpoints={{
                              // when window width is >= 640px
                              640: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 768px
                              768: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 1200px
                              1200: {
                                  slidesPerView: 5,
                              },
                          }}
                      >
                          {Donorsdatas.map((News, index) => {
                              if (index < 0) return;
                              return (
                                  <SwiperSlide key={News.id}>
                                      <DonorsItems
                                          img={News.img}
                                      />
                                  </SwiperSlide>
                              );
                          })}
                      </Swiper>
                      <Swiper
                          slidesPerView={1}
                          autoplay={{
                            delay: 5000,
                            disableOnInteraction: false
                        }}
                        translate='.6s'
                          breakpoints={{
                              // when window width is >= 640px
                              640: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 768px
                              768: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 1200px
                              1200: {
                                  slidesPerView: 5,
                              },
                          }}
                      >
                          {Partnerssatu.map((News, index) => {
                              if (index < 0) return;
                              return (
                                  <SwiperSlide key={News.id}>
                                      <DonorsItems
                                          img={News.img}
                                      />
                                  </SwiperSlide>
                              );
                          })}
                      </Swiper>
                      <Swiper
                          slidesPerView={1}
                          autoplay={{
                              delay: 5000,
                              disableOnInteraction: false
                          }}
                          breakpoints={{
                              // when window width is >= 640px
                              640: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 768px
                              768: {
                                  slidesPerView: 3,
                              },
                              // when window width is >= 1200px
                              1200: {
                                  slidesPerView: 5,
                              },
                          }}
                      >
                          {Partnersdua.map((News, index) => {
                              if (index < 0) return;
                              return (
                                  <SwiperSlide key={News.id}>
                                      <DonorsItems
                                          img={News.img}
                                      />
                                  </SwiperSlide>
                              );
                          })}
                      </Swiper>
                  {/* </div> */}
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