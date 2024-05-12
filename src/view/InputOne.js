import React from 'react';
import styled from 'styled-components';

const UserInputSelectOne = ({ title, inputPlaceholder, buttonColor }) => (
  <UserInputSelect>
    <UserText>{title}</UserText>
    <UserInputSelectDiv>
      <UserInputText placeholder={inputPlaceholder} width='368px;' />
      <UserSearchButton color={buttonColor}>입력</UserSearchButton>
    </UserInputSelectDiv>
  </UserInputSelect>
);

const UserInputSelect = styled.div`
  /* 스타일링 추가 */
`;

const UserInputSelectDiv = styled.div`
  /* 스타일링 추가 */
`;

const UserText = styled.div`
  /* 스타일링 추가 */
`;

const UserInputText = styled.input`
  /* 스타일링 추가 */
`;

const UserSearchButton = styled.button`
  /* 스타일링 추가 */
`;

export default UserInputSelectOne;
