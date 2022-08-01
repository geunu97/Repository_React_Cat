import axios from 'axios';

axios.defaults.baseURL =
  'https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev';

export const getCats = async (keyword, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.get(`/api/cats/search?q=${keyword}`);
    setLoading(false);
    return response;
  } catch {
    setLoading(false);
    alert('에러가 발생했습니다. 다시 입력해 주세요');
  }
};

export const getCat = async (id, setLoading) => {
  try {
    setLoading(true);
    const response = await axios.get(`/api/cats/${id}`);
    setLoading(false);
    return response;
  } catch {
    setLoading(false);
    alert('에러가 발생했습니다. 다시 클릭해 주세요');
  }
};

export const getRandomCats = async (setLoading) => {
  try {
    setLoading(true);
    const response = await axios.get('/api/cats/random50');
    setLoading(false);
    return response;
  } catch {
    setLoading(false);
    alert('에러가 발생했습니다. 다시 클릭해 주세요');
  }
};
