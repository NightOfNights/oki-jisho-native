import axios from './axiosConfig';

export async function getWordDefinitions(word) {
  const wordDefinitions = axios
    .get(`/${word}`)
    .then((res) => res.data)
    .catch((err) => console.error(err.message));

  return wordDefinitions;
}
