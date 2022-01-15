import { createGlobalStyle } from 'styled-components';
import Poppins from '../assets/font/Poppins.ttf';


const Typhography = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url(${Poppins});
    font-style: normal;
  }
  html{
    font-family: 'Poppins';
    color: var(--white);
  }
  *{
    font-family: 'Poppins';
    color: var(--white);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Poppins'
  }
`

export default Typhography;