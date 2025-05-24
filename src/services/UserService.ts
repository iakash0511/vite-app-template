import API from './api';

const getUserProfile = async () => {
  const res = await API.get('/user/profile');
  return res.data;
};

export const UserService = { getUserProfile };
