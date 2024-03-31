import React from 'react';
import TestComponent from './TestComponent';

function LearnPage() {
  return (
    <div style={{textAlign:'center'}}>
      <h2>
        이곳은 React 과제를 구현하는 페이지 입니다
        <br />
        아래에 과제로 그린 컴포넌트를 만들어 보세용
      </h2>
      <h3>참고자료</h3>
      <br />
      <a href='https:ko.reactjs.org/docs/components-and-props.html'>React 공식 문서</a>
      <br />
      <a href='https://goddaehee.tistory.com/299'>React 컴포넌트란?</a>
    
      <TestComponent />

    </div>
  );
}

export default LearnPage;