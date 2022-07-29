import axios from 'axios';

axios.defaults.baseURL =
  'https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev';

export const getCats = async (keyword) => {
  try {
    const response = await axios.get(`/api/cats/search?q=${keyword}`);
    return response.data.data;
  } catch {
    alert('에러가 발생했습니다. 다시 입력해 주세요');
  }
};

export const getCat = async (id) => {
  try {
    const response = await axios.get(`/api/cats/${id}`);
    return response.data.data;
  } catch {
    alert('에러가 발생했습니다. 다시 클릭해 주세요');
  }
};

export const getRandomCats = async () => {
  try {
    const response = await axios.get('/api/cats/random50');
    console.log(response.data.data);
    return response.data.data;
  } catch {
    alert('에러가 발생했습니다. 다시 클릭해 주세요');
  }
};
