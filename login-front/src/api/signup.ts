import axios from 'axios';

export const signUp = (id: string, pw: string, name: string, age: string) => {
  axios.post('http://3.35.30.37:8080/signup', {
    id,
    pw,
    name,
    age,
  });
};
