import React from 'react';
import styled from 'styled-components';

const InputOne = ({ title, inputPlaceholder, buttonColor }) => (
  <User_input_select>
    <User_text>{title}</User_text>
    <User_input_select_div>
      <User_input_text placeholder={inputPlaceholder} width='368px;' />
      <User_search_button color={buttonColor}>입력</User_search_button>
    </User_input_select_div>
  </User_input_select>
);
const User_input_select = styled.div`
    max-width : 580px;
    display : grid;
    gap : 12px;
    height: 111px;
`;

const User_input_select_div = styled.div`
    display : flex;
    width: 500px;
    height : 40px;
    gap : 12px;
`;

const User_text = styled.div`
    font-size : 16px;
    font-weight: 400;
    line-height: 19.36px;
    align-items : center;
    display : grid;
`;

const User_input_text = styled.input`
    background-color: #F1F1F1;
    border-radius: 10px;
    border : none;
    height : 40px;
    padding-left:12px;
    width : ${props => props.width};
    placeholder : ${value => value.placeholder};
`;

const User_search_button = styled.button`
    background-color: ${props => props.color};
    font-size : 16px;
    weigth : 400;
    width : 120px;
    height : 40px;
    border-radius: 10px;
    border : none;
`;
export default InputOne;
