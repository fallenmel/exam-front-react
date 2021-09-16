import { config, handleError, handleSuccess } from './axios.config';
const axios = require('axios');
const { REACT_APP_API_URL: API_URL } = process.env;

export const postUser = (payload) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.post(
        `${API_URL}/api/user/make`,
        payload,
        config
      );
      resolve(handleSuccess(response));
    } catch (error) {
      reject(handleError(error));
    }
  });
};
