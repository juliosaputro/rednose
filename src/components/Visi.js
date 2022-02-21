import React from 'react';
import styled from 'styled-components';
import TitleSection from './TitleSection';

export default function Visi() {
    return (
        <VisiStyled>
            <div className="visimisi">
                <VisiCard>
                    <h1 className="title">
                        OUR VISION
                    </h1>
                    <ul>
                        <li> ◉ Support children and youth
                            to become individuals with
                            life goals</li>
                        <li> ◉ Equip them with skills and
                            ability to achieve it</li>
                        <li> ◉ Become positive contributors
                            for communities</li>
                    </ul>
                </VisiCard>
                <VisiCard>
                    <h1 className="title">
                        OUR MISION
                    </h1>
                    <ul>
                        <li> ◉ Promote the empowerment of children
                            and youth through circus arts and healthy lifestyle</li>
                        <li> ◉ Support the educational and personal
                            development of children and youth in
                            underprivileged circumstances</li>
                        <li> ◉ Offers a safe place for children to explore, experiment, and be educated</li>
                        <li> ◉ Promote gender mainstreaming and positive parenting to parent, teachers, as children and youth support system </li>
                    </ul>
                </VisiCard>
            </div>
        </VisiStyled>
    )
}

const VisiStyled = styled.div`
.visimisi{
    padding: 10rem;
    display: grid;
    background-color: #F2C938;
    grid-template-columns: repeat(2, 1fr);
    align-items:center;
    @media screen and (max-width: 689px){
        grid-template-columns: repeat(1, 1fr);
        grid-gap:3rem;
    }
}

.title{
    font-size: 4.5rem;
    font-weight: bold;
    text-align: center;
    span{
        font-size: 1.5rem;
    }
    @media screen and (max-width: 689px){
        font-size: 3rem;
        font-weight: bold;
        text-align: center;
        span{
            font-size: 1.5rem;
    }
    }
}
`;


const VisiCard = styled.div`
background-color: #FFFFFF;
padding: 2rem 1rem;
margin-left:170px;
border-radius: 50px;
height: 600px;
width: 500px;
box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    ul,li,h1{
        padding:10px;
        font-size: 2rem;
        color: var(--rn-blue);
    }

    @media screen and (max-width: 689px){
        padding: 2rem 1rem;
        border-radius: 50px;
        margin-left:-40px;
        height: 420px;
        width: 300px;
        box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
            ul,li,h1{
                padding:5px;
                font-size: 1.3rem;
                color: var(--rn-blue);
            }
    }
`;


