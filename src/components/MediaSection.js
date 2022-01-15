import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import MediaItems from './MediaItems';
import TitleSection from './TitleSection';
import Mediadatas from '../assets/data/Mediadatas';

export default function MediaSection() {
       return (
              <MediaSectionStyled>
                     <div className='container'>
                            <TitleSection heading='MEDIA' />
                            <div className='projects__allItems'>
                            {Mediadatas.map((Media, index) => {
                            if (index >= 9) return;
                            return (
                                    <MediaItems
                                        title={Media.title}
                                        url={Media.url}
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
       .projects__allItems {
              margin-top: 5rem;
       }
`