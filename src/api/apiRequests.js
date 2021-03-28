import axios from './axiosConfig';

export async function getWordDefinitions(word) {
  const { data } = await axios.get(`/${word}`);
  console.log(data, 'asd');
  return data;
}
