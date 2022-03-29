import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

export default function MediaItems({
       url = 'url',
       title = 'Project Name',
     }) {
       return (
              <TeamItemsStyled>
                     <div className="projectItem__video">
                     <ReactPlayer controls width='50%' height='100%' url={url} />
                     </div>
                     <div className="projectItem__info">
                            <a className="projectItem__title">{title}</a>
                     </div>
              </TeamItemsStyled>
       )
}

const TeamItemsStyled = styled.div`
margin-bottom: 20px;

.projectItem__video {
  width: 100%;
  height: 350px;
  // background: red;
  // border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content:center;
  align-items:center;
  // border: 3px solid var(--gray-2);
}
.projectItem__info {
  background-color: var(--rn-primary);     
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 12px;
  text-align:center;
}
.projectItem__title {
  font-size: 2rem;
  color: var(--rn-blue);
  font-family: 'Poppins';
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .projectItem__img {
    height: 350px;
  }
}


`