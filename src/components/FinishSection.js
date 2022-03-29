import React, { useState } from 'react';
import styled from 'styled-components';
import { MdArrowForward, MdArrowBack } from 'react-icons/md';
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import PText from './PText';
import TitleSection from './TitleSection';
import Finishdatas from '../assets/data/Finishdatas';
import Jugling from '../assets/images/jugling.png';

export default function FinishSection() {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeSlide = Finishdatas[activeIndex];

    function handleNext() {
        if (activeIndex >= Finishdatas.length - 1) {
            setActiveIndex(0);
        } else {
            setActiveIndex((oldIndex) => oldIndex + 1);
        }
    }
    function handlePrev() {
        if (activeIndex === 0) {
            setActiveIndex(Finishdatas.length - 1);
        } else {
            setActiveIndex((oldIndex) => oldIndex - 1);
        }
    }


    return (
        <FinishSectionStyled>
            <div className="container">
                <TitleSection
                    subheading=" "
                    heading="And Grow into This"
                />
                <div className="testimonial__wrapper">
                    <SwitchTransition component={null}>
                        <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
                            <div className="testimonial__info">
                                <div className="testimonial__desc">
                                    {/* <PText>{activeSlide.img}</PText> */}
                                    <img src={activeSlide.img} />
                                </div>
                            </div>
                        </CSSTransition>
                    </SwitchTransition>
                </div>

                <div className="arrows">
                    <div
                        className="prev"
                        onClick={handlePrev}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handlePrev}
                    >
                        <MdArrowBack />
                    </div>
                    <div
                        className="next"
                        onClick={handleNext}
                        role="button"
                        tabIndex={0}
                        onKeyDown={handleNext}
                    >
                        <MdArrowForward />
                    </div>
                </div>
                    <div className='bottom'>
                      <img src={Jugling} />
                      <h3>Over a decade, we have been supporting 125.000 children 
                        and youth, 1.200 parents, teachers and local communities 
                        in Jakarta, Tangerang, Sulawesi, Sumatera Barat and Yogyakarta</h3>
                    </div>
            </div>
        </FinishSectionStyled>
    )
}

const FinishSectionStyled = styled.div`
overflow-x: hidden;
padding: 10rem 0;
text-align: center;
.testimonial__wrapper {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
}
.testimonial__info {
  width: 100%;
  height: fit-content;
  padding: 1rem;
  background-color: var(--gray-1);
  border-radius: 12px;
  margin-top: 5rem;
}
.testimonial__desc {
  .para {
    text-align: center;
  }
}
.testimonial__name {
  margin-top: 4rem;
  font-family: 'Montserrat Bold';
  font-size: 2.2rem;
}
.testimonial__title {
  font-size: 1.6rem;
  margin-top: 0.3rem;
}
.arrows {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 30px;
    pointer-events: none;
  }
  .next,
  .prev {
    margin: 0 0.5rem;
    width: fit-content;
    background-color: var(--rn-blue);
    padding: 0.5rem 2rem;
    border-radius: 8px;
    cursor: pointer;
  }
}
.fade-enter {
  opacity: 0;
  transform: scale(0.96);
  z-index: 1;
}
.fade-enter-active {
  opacity: 1;
  transform: scale(1);
  transition: 250ms ease-in;
  transition-property: transform, opacity;
  z-index: 1;
}
.fade-exit {
  transform: scale(1);
  opacity: 1;
}
.fade-exit-active {
  opacity: 0;
  transform: scale(0.96);
  transition: 200ms ease-in;
  transition-property: transform, opacity;
}
.description{
    margin-top: 4rem;
    .para{
        p{
          color: var(--rn-blue);
          font-size: 20px;
        }
    }
}

.bottom{
  margin-top: 4rem;
  img{
    width: 30%;
    height: 30%;
  }
    h3{
      background: var(--rn-primary);
      border-radius: 12px;
      color: var(--rn-blue);
      font-size: 30px;
    }
}
}
`;