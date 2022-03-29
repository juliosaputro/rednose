import React from 'react';
import styled from 'styled-components';
import EducationItems from './EducationItems';
import TitleSection from './TitleSection';
import {Craetivedatas, Healthydatas, Youthdatas, Sustaindatas, Traumadatas} from '../assets/data/Pillarsdatas'
import CreativeItems from './CreativeItems';

export default function CreativeSection() {
       return (
              <MediaSectionStyled>
                     <div className='container'>
                            <div className='projects__allItems'>
                            <TitleSection heading='Creative Learning Program' />
                            {Craetivedatas.map((Media, index) => {
                            if (index >= 9) return;
                            return (
                                    <EducationItems
                                        title={Media.title}
                                        img={Media.img}
                                        des={Media.des}
                                    />
                            );
                        })}
                            </div>
                     </div>
              </MediaSectionStyled>
       )
}

const MediaSectionStyled = styled.div`
       padding: 10rem 0;
       background: var(--rn-primary);
       .projects__allItems {
              margin-top: 5rem;
              .section-title{
              border-bottom: 5px solid red;
              border-top: 5px solid red;
                h2{
                   color: var(--rn-blue);  
                }
              }
       }
`