export const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const handleSuccess = (resp) => resp.data;

export const handleError = (error) => {
  if (error.response) {
    return error.response;
  } else {
    const response = {
      status: 500,
      body: { message: 'Internal Server error' },
    };
    return response;
  }
};
