import axios from 'axios';

const getProfile = async (token: string) => {
  return axios
    .get('http://localhost:8080/mypage', {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};
export default getProfile;
