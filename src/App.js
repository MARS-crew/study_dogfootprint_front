import logo from './logo.svg';
import Router from "./Router";
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            리액트 공부합시다
          </p>
          <Link to="/learn">학습 페이지로 이동</Link>
        </header>
      </div>
    </>
  );
}

export default App;
