import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import access from '../atom/token';
import { useState } from 'react';
import getProfile from '../api/profile';
import styled from 'styled-components';
const Mypage = () => {
  const access_token = useRecoilValue(access);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  getProfile(access_token);
  if (!access_token) {
    navigate('/');
  }
  return <Wrapper>{access_token}</Wrapper>;
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
