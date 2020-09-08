import axios from 'axios';

const base_url = 'http://localhost:3030/api/v1';

// AUTH
export const apiSignIn = async (payload: any) => {
  const url = `${base_url}/user/signin`;
  const res = await axios.post(url, payload);
  return res;
};

export const apiSignUp = async (payload: any) => {
  const url = `${base_url}/user/signup`;
  const body = Object.assign({created_at: new Date()}, payload);
  const res = await axios.post(url, body);
  return res;
};
