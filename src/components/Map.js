import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

export default function Map() {
       return (
              <MapStyles>
                     <div className="container">
                            <div className="map__card">
                                   <h3 className="map__card__heading">I am here</h3>
                                   <PText>Tangerang Selatan Banten, 15222</PText>
                                   <a
                                          className="map__card__link"
                                          href="https://goo.gl/maps/7Tvd8EjhdsKXG2ycA"
                                          target="_blank"
                                          rel="noreferrer"
                                   >
                                          Open in google map
                                   </a>
                            </div>
                     </div>
              </MapStyles>
       )
}

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 30%;
    bottom: 32%;
    padding: 2rem;
    background: var(--rn-primary);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;