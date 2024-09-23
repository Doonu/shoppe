import axios from 'axios';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export const getData = async () => {
  const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  return response.data.map((item) => item.id);
};
