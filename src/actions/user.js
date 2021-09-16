import { postUser } from '../utility/user';

export const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user,
  };
}

export const makeUser = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    postUser(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
