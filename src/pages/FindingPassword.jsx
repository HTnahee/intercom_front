//비밀번호 찾기 수정중
import React, {useState} from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import fakeUsersData from '../data/fakeUsersData';

export default function FindingPassword() {
  const [Email, setEmail] = useState('');

  const navigate = useNavigate();
  const navigateToJoin = () => navigate('/findingemail');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
    }
  };

  return (
    <Container>
    <Text1>비밀번호 찾기</Text1>
    <Text2>이메일</Text2>
    <InputField
        type="text"  
        placeholder="이메일 입력하기"
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
    </Container>
  )
}

const Container = styled.div`
text-align: center;
`;

const Text1 = styled.p`
color: #000;

font-family: SUITE;
font-size: 3.125rem;
font-style: normal;
font-weight: 700;
line-height: normal;

margin-top:18.13rem;
margin-bottom:0.62rem;
`;

const Text2 = styled.p`
color: #000;

font-family: SUITE;
font-size: 1.5625rem;
font-style: normal;
font-weight: 600;
line-height: 2.34375rem; 

margin: 0;
`;

export const InputField = styled.input`
width: 30.375rem;
height: 4rem;
border-radius: 0.625rem;
border: 3px solid #E2E2E2;

color: #A1A1A1;
/* B2 */
font-family: SUITE;
font-size: 1.25rem;
font-style: normal;
font-weight: 700;
line-height: normal;

margin-top:2.06rem;
margin-bottom:42.81rem;
padding-left: 1.44rem;
`;