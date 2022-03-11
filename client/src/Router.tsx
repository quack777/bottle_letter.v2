import React, { FC } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Main from './pages/main/Main';
import Read from './pages/read/Read';
import Write from './pages/write/Write';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <MainBackGround>
        <Link to="/">
          <h1>Message in a Bottle</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/write" element={<Write />} />
          <Route path="/read" element={<Read />} />
        </Routes>
      </MainBackGround>
    </BrowserRouter>
  );
};

const MainBackGround = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center; */
  width: 100vw;
  height: 100vh;
  background-image: url('/images/beach_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Router;
