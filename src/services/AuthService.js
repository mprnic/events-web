import axios from 'axios';

import { AUTH_SERVICE_URL } from '../constants';

export const getUser = () => axios.get(`${AUTH_SERVICE_URL}/users`, { headers: { authorization: localStorage.getItem('authToken') } });
