import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Main: FC = () => {
  return (
    <div>
      <Link to="/read">
        <BottleImage alt="bottle" src="/images/letter_in_bottle.png" />
      </Link>
      <Link to="/write">
        <button type="button">Write</button>
      </Link>
    </div>
  );
};

const BottleMove = keyframes`
  from {
    transform: translateX(-25px);
  }
  to {
    transform: translateX(25px);
  }
`;

const BottleImage = styled.img`
  animation: ${BottleMove} 1s linear infinite alternate;
`;

/* const MainBackGround = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url('/images/beach_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;
 */
export default Main;
