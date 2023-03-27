import React, { useState } from 'react';
import styled from 'styled-components';
import { signUp } from '../api/signup';
const SignUp = () => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState('');
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };
  const handleClick = () => {
    signUp(id, password, name, age);
  };
  return (
    <Wrapper>
      <LoginWrapper>
        <Title>회원가입</Title>
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
            <Input
              type="text"
              placeholder="이름"
              value={name}
              onChange={onChangeName}
            />
            <Input
              type="number"
              placeholder="나이"
              value={age}
              onChange={onChangeAge}
            />
          </InputWrapper>
        </MainSection>
        <SignUpButton onClick={handleClick}>Sign Up</SignUpButton>
      </LoginWrapper>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;
const LoginWrapper = styled.div`
  width: 700px;
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
  width: 250px;
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
const SignUpButton = styled.div`
  margin-top: 20px;
  cursor: pointer;
  width: 100px;
  background-color: black;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
