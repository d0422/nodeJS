import axios from 'axios';

export const signUp = (id: string, pw: string, name: string, age: string) => {
  axios.post('http://localhost:8080/signup', {
    id,
    pw,
    name,
    age,
  });
};
