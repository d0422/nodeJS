import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import access from '../atom/token';
import { useState } from 'react';
import getProfile from '../api/profile';
const Mypage = () => {
  const access_token = useRecoilValue(access);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  getProfile(access_token);
  if (!access_token) {
    navigate('/');
  }
  return <div>{access_token}</div>;
};

export default Mypage;
