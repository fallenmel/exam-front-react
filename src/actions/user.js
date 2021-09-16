import { getUser, getUserById, postUser } from '../utility/user';

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

export const fetchUser = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    getUser(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const fetchUserById = (payload) => (dispatch) => {
  return new Promise((resolve, reject) => {
    getUserById(payload)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
