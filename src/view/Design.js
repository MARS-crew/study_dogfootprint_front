import React from 'react';
import styled from 'styled-components';
import InputOne from './Input';
import InputTwo from './InputTwo';

const users = [
    { id: 1, name: '임동현', age: 24 },
    { id: 2, name: '임동현', age: 24 },
    { id: 3, name: '임동현', age: 24 },
    { id: 4, name: '임동현', age: 24 }
    ];

function Design(props,value){
    return(
        <div>
            {/* <User_input>
                <User_input_select>
                    <User_text>특정 유저 조회</User_text>
                    <User_input_select_div>
                        <User_input_text placeholder="userId" width='368px;' />
                        <User_search_button color='#62B8E9'>입력</User_search_button>
                    </User_input_select_div>
                </User_input_select>
                <User_input_select>
                    <User_text>유저 생성</User_text>
                    <User_input_select_div>
                        <User_input_text placeholder="이름" width='178px;' />
                        <User_input_text placeholder="나이" width='178px;' />
                        <User_search_button color='#8DF191'>입력</User_search_button>
                    </User_input_select_div>
                </User_input_select>
                <User_input_select>
                    <User_text>유저 이름 수정</User_text>
                    <User_input_select_div>
                        <User_input_text placeholder="userId" width='178px;' />
                        <User_input_text placeholder="이름" width='178px;' />
                        <User_search_button color='#EEE96B'>입력</User_search_button>
                    </User_input_select_div>
                </User_input_select>
                <User_input_select>
                    <User_text>유저 정보 삭제</User_text>
                    <User_input_select_div>
                        <User_input_text placeholder="userId" width='368px;' /> 
                        <User_search_button color='#FD7676'>입력</User_search_button>
                    </User_input_select_div>
                </User_input_select>
            </User_input> */
            
            
            }
            <InputOne title="특정 유저 조회" inputPlaceholder="userId" buttonColor="#62B8E9" />
            <InputTwo title="유저 생성" inputs={["이름", "나이"]} buttonColor="#8DF191" />
            <InputTwo title="유저 이름 수정" inputs={["userId", "이름"]} buttonColor="#EEE96B" />
            <InputOne title="유저 정보 삭제" inputPlaceholder="userId" buttonColor="#FD7676" />
    
            <User_list>
                <User_list_text>조회 결과</User_list_text>

                    <User_list_div>
                    {users.map(user => (
                        <User_list_a key={user.id}>
                        <Ab>Id:{user.id}</Ab>
                        <Ab>name:{user.name}</Ab>
                        <Ab>age:{user.age}</Ab>
                        </User_list_a>
                    ))}
                    </User_list_div>

            </User_list>
        </div>
    )
}

// const User_input = styled.div`
//     width: 580px;
//     height: 446px;
//     font-size: 16px;
//     padding : 20px 40px 20px 40px;
// `;

// const User_input_select = styled.div`
//     max-width : 580px;
//     display : grid;
//     gap : 12px;
//     height: 111px;
// `;

// const User_input_select_div = styled.div`
//     display : flex;
//     width: 500px;
//     height : 40px;
//     gap : 12px;
// `;

// const User_text = styled.div`
//     font-size : 16px;
//     font-weight: 400;
//     line-height: 19.36px;
//     align-items : center;
//     display : grid;
// `;

// const User_input_text = styled.input`
//     background-color: #F1F1F1;
//     border-radius: 10px;
//     border : none;
//     height : 40px;
//     padding-left:12px;
//     width : ${props => props.width}
//     placeholder : ${value => value.placeholder}
// `;


const User_list = styled.div`
    width: 580px;
    height: 247;
    padding: 40px;
    gap : 12px;
    display : grid;
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

const User_list_div = styled.div`
    background-color: #F1F1F1;
    width : 500px;
    height : 136px;
    border-radius : 12px;
    gap : 12px;
    display : grid;
    padding : 12px 20px 12px 20px;
`;

const User_list_a = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 0px 12px 0px 12px;
`;

const User_list_text = styled.div`
    font-size : 16px;
    font-weight: 400;
    line-height: 19.36px;
`;


const Ab = styled.div`
    display : inline-block;
`;

export default Design;