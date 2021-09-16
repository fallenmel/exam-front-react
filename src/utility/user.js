import { config, handleError, handleSuccess } from './axios.config';
const axios = require('axios');
const { REACT_APP_API_URL: API_URL } = process.env;

export const postUser = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${API_URL}/user/store.php`,
        payload,
        config
      );
      resolve(handleSuccess(response));
    } catch (error) {
      reject(handleError(error));
    }
  });
};

export const getUser = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(`${API_URL}/user`, {}, config);
      resolve(handleSuccess(response));
    } catch (error) {
      reject(handleError(error));
    }
  });
};

export const getUserById = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${API_URL}/user/index.php?id=${payload}`,
        {},
        config
      );
      resolve(handleSuccess(response));
    } catch (error) {
      reject(handleError(error));
    }
  });
};
