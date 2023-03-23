import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ILoginPostBody, login } from '../api/login';
const Login = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleClick = () => {
    const body: ILoginPostBody = {
      id,
      pw: password,
    };
    login(body);
  };
  return (
    <Wrapper>
      <LoginWrapper>
        <Title>로그인하기</Title>
        <MainSection>
          <InputWrapper>
            <Input
              type="text"
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={onChangePassword}
            />
          </InputWrapper>
          <LoginButton onClick={handleClick}>Login</LoginButton>
        </MainSection>
        <Link to={'/signup'}>
          <SignUpButton>회원가입하기</SignUpButton>
        </Link>
      </LoginWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const LoginWrapper = styled.div`
  width: 400px;
  height: 700px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  font-family: 'OTWelcomeRA';
`;
const Title = styled.div`
  font-size: 25px;
  padding-bottom: 25px;
  font-weight: 700;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
const Input = styled.input`
  width: 200px;
  height: 30px;
  font-size: 15px;
  border-radius: 10px;
  border-style: none;
  padding: 10px;
  &::placeholder {
    color: lightgray;
    font-weight: 700;
  }
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LoginButton = styled.div`
  cursor: pointer;
  width: 100px;
  height: 100%;
  background-color: black;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignUpButton = styled.div`
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: grey;
`;

export default Login;
