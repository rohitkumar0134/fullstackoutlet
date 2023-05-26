import axios from 'axios';
const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const checkToken = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/admin/login';
    } else {
      const response = await axios.post(`${baseUrl}/check-token`, { token });
      console.log(response.data.valid);
      if (!response.data.valid) {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
      }
    }
  } catch (err) {
    console.error(err);
    localStorage.removeItem('token');
    window.location.href = '/admin/login';
  }
};
