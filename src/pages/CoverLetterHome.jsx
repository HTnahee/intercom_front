import React from 'react'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function CoverLetterHome() {
    const navigate = useNavigate();
    const navigateToInput = () => navigate('/cover-letters-input');

  return (
    <PageContainer>
      <SearchBox>
        <SearchText>합격 자소서 검색하기</SearchText>
        <SearchInput>
          <InputField type="text" id="company" placeholder="기업명" />
          <InputField type="text" id="position" placeholder="직무" />
          <SearchButton>검색</SearchButton>
        </SearchInput>
      </SearchBox>

      <WritingContainer>
        <img src="./assets/CoverLetterProfile.png" alt="Profile Icon" style={{ marginRight: '1.5rem' }} />
        <WritingBox onClick={navigateToInput}>
          합격 자소서를 남겨보세요
        </WritingBox>
      </WritingContainer>

      
    </PageContainer>
  )
}

const SearchBox = styled.div`
  width: 74.9375rem;  
  height: 15.5625rem;
  background-color: #5B00EF;
  border-radius: 0.5rem;
  margin-top: 4.0625rem;
  margin-bottom: 3.9375rem;
`;

const SearchText = styled.p`
font-family: 'SUITE';
font-style: normal;
font-weight: 700;
font-size: 3.125rem;
line-height: 3.875rem;

color: #E5FF7D;

margin-top: 2.4375rem;
margin-bottom: 2.1875rem;
margin-left: 4.875rem;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  margin-left: 4.875rem;
`;

const InputField = styled.input`
  width: 17.625rem;
  height: 4.5rem;
  border: 0.1875rem solid #FFFFFF;
  border-radius: 1rem;
  background-color: #5B00EF;
  color: #A1A1A1;
  font-size: 1.5625rem;
  margin-right: 1.25rem;
  padding-left: 1.75rem; /* Add padding */
  box-sizing: border-box; /* Include border in width and height */

  font-family: 'SUITE';
font-style: normal;
font-weight: 600;
font-size: 1.5625rem;
line-height: 2.375rem;
`;

const SearchButton = styled.button`
  width: 8.25rem;
  height: 4.5rem;
  background-color: #E5FF7D; 
  border: none;
  border-radius: 1rem;
  color: #5B00EF;
  font-size: 1.25rem;
  cursor: pointer;
  font-family: 'SUITE';
font-style: normal;
font-weight: 600;
font-size: 1.5625rem;
line-height: 2.375rem;
/* identical to box height, or 150% */
text-align: center;
`;

const WritingContainer = styled.div`
  align-items: center;
  background-color: #FFF;
  display: flex;
  width:74.9375rem;
  height: 5rem;
  justify-content: center;
  cursor: pointer;
`;

const WritingBox = styled.div`
  align-items: center;
  background-color: #E2E2E2;
  border-radius: 1.3rem;
  box-sizing: border-box;
  color: #A1A1A1;
  display: flex;
  font-size: 1.5625rem;
  font-weight: 800;
  justify-content: left;
  margin-left: 1.5rem;
  padding-left: 2.69rem;
  width: 68.25rem;
  height: 5rem;
`;

const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
