import axios from 'axios';

export const signUp = (id: string, pw: string, name: string, age: number) => {
  axios.post('http://localhost:8080', {
    body: {
      id,
      pw,
      name,
      age,
    },
  });
};
