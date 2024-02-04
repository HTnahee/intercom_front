import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import fakeNotices from '../data/fakeNotices';



const Home = () => {
    const [activePage, setActivePage] = useState("/home");
    const navigate = useNavigate();
  
    const handlePageChange = (path) => {
      navigate(path);
      setActivePage(path);
    };

  return (
    <Main>
     
      <MenuBox>
      <PageIcons>
          <Icons onClick={() => handlePageChange('/saved-notices')}>
            <img src="/assets/SavedNotices.png" alt="SavedNotices" 
            style={{width: "4rem", height: "5rem", marginBottom: "1.25rem"}} />
            <span>저장한 공고</span>
          </Icons>
          <Icons onClick={() => handlePageChange('/mycareer')}>
            <img src="/assets/MyCareer.png" alt="MyCareer"
<<<<<<< HEAD
             style={{width:"74.61px", height:"67.15px", marginBottom:"32.85px"}}  />
            <span>내 커리어</span>
=======
            style={{width: "4.663rem", height: "4.197rem", marginBottom: "2.053rem"}}  />
<<<<<<< HEAD
            <span>내커리어</span>
>>>>>>> seongbin
=======
            <span>내 커리어</span>
>>>>>>> develop
          </Icons>
          <Icons onClick={() => handlePageChange('/talktalk')}>
            <img src="/assets/Talktalk.png" alt="Talktalk"
             style={{width: "5.136rem", height: "5.124rem", marginBottom: "1.126rem"}} />
             <span>톡톡</span>
          </Icons>
          <Icons onClick={() => handlePageChange('/cover-letters')}>
            <img src="/assets/Coverletters.png" alt="Coverletters"
             style={{width: "4rem", height: "5.063rem", marginBottom: "1.188rem"}} />
             <span>합격 자소서</span>
          </Icons>
          <Icons onClick={() => handlePageChange('/interviews')}>
            <img src="/assets/interviews.png" alt="Interviews"
             style={{width: "4.125rem", height: "5rem", marginBottom: "1.25rem"}} />
             <span>면접 후기</span>
          </Icons>
          <Icons onClick={() => handlePageChange('/news')}>
            <img src="/assets/News.png" alt="News"
             style={{width: "4rem", height: "4rem", marginBottom: "2.25rem"}} />
             <span>취업 뉴스</span>
          </Icons>
        </PageIcons>
      </MenuBox>
      <RecommendBox>
        <span>내 스펙을 분석해 <br/> 관심 있을 만한 포지션을 추천해 드려요.</span>
        <StartButton>
            <span onClick={() => handlePageChange('/recommend')}>지금 시작하기</span>
        </StartButton>
      </RecommendBox>
      <PopularNoticesBox>
        <span style={{fontSize: "1.563rem", fontWeight: "800"}}>실시간 인기 공고</span>
        <ContentsBox>
            <Content>
                {fakeNotices.map(notice => (
                 <NoticeItem key={notice.id}>
                    <img src={notice.imageUrl} alt={notice.title} style={{marginBottom: "1.25rem"}}/>
                    <div>
                        <Title>[{notice.title}] </Title>
                        <Information>{notice.information}</Information>
                        <br />
                        <br />
                        <Deadline>D-{notice.deadline}</Deadline> <Views>조회 {notice.views}</Views>
                    </div>
                 </NoticeItem>
                ))}
            </Content>
        </ContentsBox>
      </PopularNoticesBox>
    </Main>
  );
};

export default Home;




const PopularNoticesBox = styled.div`
  width: 75rem;
  margin: 3.125rem auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentsBox = styled.div`
  width: 75rem;
  min-height: 27.313rem;
  background-color: #FFFFFF;
  border-radius: 1.25rem;
`;

const Content = styled.div`
  display: flex;
  gap: 1.563rem;
  flex-wrap: wrap;

  @media (max-width: 75rem) {
    justify-content: space-around;
  }
`;

const NoticeItem = styled.div`
  flex: 0 0 calc(25% - 1.25rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.25rem;

  img {
    background-color: #D9D9D9;
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  span {
    font-size: 1.25rem;
    text-align: left;
    margin-top: 1.25rem;
  }
`;

const RecommendBox = styled.div`
  width: 75rem;
  height: 12.25rem;
  background-color: #EFF0F4;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3.125rem auto;
  margin-top: 5rem;

  span {
    font-size: 1.875rem;
    font-weight: bold;
    text-align: left;
    margin-left: 5.938rem;
  }
`;

const Main = styled.div`
  padding: 1.25rem;
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 90%;
  margin-top: 4.375rem;
  max-width: 62.5rem;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 1.063rem;
    text-align: center;
  }
`;

const StartButton = styled.div`
  width: 14rem;
  height: 4.5rem;
  background-color: #5B00EF;
  border-radius: 0.625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 3.875rem;

  span {
    font-size: 1.563rem;
    color: #fff;
    display: inline-block;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Information = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Deadline = styled.span`
  font-size: 1.063rem;
  color: #5B00EF;
`;

const Views = styled.span`
  color: #636363;
`;
