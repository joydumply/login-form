import axios from 'axios';
import API_ENV from '../config/api.config';

/**
 * Function Login. Make login request to Api
 * @param {String} email
 * @param {String} password
 */
export default async function login(email, password) {
  try {
    const response = await axios.post(
      `${API_ENV.apiUrl}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
}
