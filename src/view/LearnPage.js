import React from 'react';
import styled from 'styled-components';
import FigmaPub from './FigmaPub';

function LearnPage() {
    return (
        <div>
            <h2>
                이곳은 React 과제를 구현하는 페이지입니다
                <br />
                아래에 과제로 드린 컴포넌트를 만들어 보세용
            </h2>
            <h3>참고 자료</h3>
            <a href="https://styled-components.com/">styled components 공식 문서</a>
            <br />
            <a href="https://ko.legacy.reactjs.org/docs/components-and-props.html">React props</a>
            <br />
            <br />
            <br />
            {/* 여기 사이에 컴포넌트들을 구현 ----------------------------------------------- */}
            <StyledButton>예시</StyledButton>
            <FigmaPub />
            {/* 여기 사이에 컴포넌트들을 구현 ----------------------------------------------- */}
        </div>
    );
}
const StyledButton = styled.button`
    background-color: blue;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
`;

export default LearnPage;