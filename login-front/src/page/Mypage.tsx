import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import access from '../atom/token';
import { useEffect, useState } from 'react';
import getProfile from '../api/profile';
import styled from 'styled-components';
const Mypage = () => {
  const access_token = useRecoilValue(access);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>();
  const navigate = useNavigate();
  useEffect(() => {
    getProfile(access_token).then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (!access_token) {
    navigate('/');
  }
  if (loading) return <Wrapper>로딩중</Wrapper>;
  return (
    <Wrapper>
      <ProfileWrapper>
        <Name>{data?.name} 님</Name>
        <Name>{data?.age} 세</Name>
      </ProfileWrapper>
    </Wrapper>
  );
};

export default Mypage;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const Name = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const ProfileWrapper = styled.div`
  width: 400px;
  height: 700px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  font-family: 'OTWelcomeRA';
`;
