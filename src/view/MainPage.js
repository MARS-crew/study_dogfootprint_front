import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React 과제 페이지입니다.
          </p>
          <Link to="/learn">과제 작성 페이지로 가기</Link>
        </header>
      </div>
  );
}

export default MainPage;