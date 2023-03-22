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
    .then((res) => console.log(res));
};
