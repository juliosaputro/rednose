import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import rnflogo2 from '../assets/images/rnflogo2.png';
import { Fade } from 'react-reveal';
import Barcode from '../assets/images/barcode.png';

export default function Header() {
    return (
        <HeaderStyles>
            <div className='header'>
              <div className='description'>
                <img src={rnflogo2} alt="" className="rnflogo2" />
                {/* <h1>Red Nose Foundation(RNF)</h1> */}
                <p className='para'>
                  Red Nose Foundation(RNF) is a non-profit organization focused on arts,
                  education and personal development for unprivilledge communities in indonesia.<br></br>
                  <br></br>
                  Established in 2008, we work to empower underprivileged children, youth and the communities to reach their dreams and improving their quality of life.
                </p>
                <div className='form'>
                  <div className='title'>
                    <h1>Scan to Donate</h1>
                  </div>
                    <img src={Barcode} />
                </div>
              </div>
            </div>
        </HeaderStyles>
    )
}


const HeaderStyles = styled.div`
.header{
    padding: 10rem;
    min-height: 1000px;
    background: var(--rn-primary);
    overflow: hidden;
    color: var(--rn-blue);
}

.header .para{
  margin-top: 5rem;
  margin-left: 20px;
  padding-left: 25px;
  color: var(--rn-blue);
  width: 900px;
  padding-bottom: 25px;
  font-size: 30px;
  font-family: 'Poppins';
  letter-spacing: 1.2px;
  line-height: 30px;
}

.header .rnflogo2{
  margin-top: 20rem;
  margin-left: 20px;
  border-radius:50px;
  background: var(--rn-blue);
  padding: 20px;
  width: 700px;
}

.header h1{
  padding-left: 20px;
  margin-top: 9%;
  font-family: 'Poppins';
  font-size: 50px;
  letter-spacing: 2px;
}


.form {
    width: 500px;
    height: 550px;
    background: white;
    position: absolute;
    top: 30rem;
    left: 1200px;
    border-radius: 30px;
    padding: 25px;
    img{
      width: 450px;
      height: 450px;
      padding: 30px;
    }
  }
  
  .title{
    margin-left: 25px;
    text-align: center;
    width: 395px;
    height: 6rem;
    background-color: var(--rn-blue);
    border-radius: 30px;
  }
  .title h1{
    font-family: 'Poppins';
    font-size: 25px;
    color: white;
    margin: 2px;
    padding: 8px;
  }

  @media only screen and (max-width: 768px) {
    .barcode_img {
      height: 150px;
    }
    .header{
      padding: 0;
      margin-top:-10rem;
      grid-template-columns: repeat(1, 1fr);
      // display: absolute;
      flex-direction: column;
      height: 1000px;
      .rnflogo2{
        height:60px;
        width: 300px;
        margin-left: 40px;
      }
    }

    .header .para{
      margin-left: 45px;
      padding-left: 5px;
      color: var(--rn-blue);
      width: 350px;
      padding-bottom: 5px;
      font-size: 18px;
      font-family: 'Poppins';
      letter-spacing: 1.2px;
      line-height: 20px;
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 270px;
      height: 300px;
      background: white;
      top: 50rem;
      left: 70px;
      border-radius: 30px;
      padding: 25px;
      img{
        width: 200px;
        height: 200px;
        padding: 20px;
        margin-left: 7px;
      }
    }

    .title{
      margin-left: 10px;
      text-align: center;
      width: 195px;
      height: 4rem;
      background-color: var(--rn-blue);
      border-radius: 30px;
    }
    .title h1{
      font-family: 'Poppins';
      font-size: 14px;
      color: white;
      margin: 2px;
      padding: 8px;
    }
    
  }

  @media screen and (max-width: 700px){
    grid-template-columns: repeat(1, 1fr);
}

`;