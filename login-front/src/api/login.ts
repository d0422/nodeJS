import axios from 'axios';
export interface ILoginPostBody {
  id: string;
  pw: string;
}
export const login = (body: ILoginPostBody) => {
  return axios
    .post('http://localhost:8080', {
      id: body.id,
      pw: body.pw,
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 401) alert('ID 또는 PW가 잘못되었습니다.');
    });
};
