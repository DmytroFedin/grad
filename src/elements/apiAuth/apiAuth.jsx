import axios from 'axios';

const $api = axios.create({
  withCredentials: true,
  baseURL: 'https://grad-beetroot.deta.dev/'
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config
})

export default $api;

export const logout = async (setUser, setIsAuth, backendRoute, setOpenBox) => {
  const header = new Headers();
      header.append('Content-Type', 'application/json')
      try {
        await axios
          .post(`${backendRoute}api/auth/logout`, header)
          .then((response) => {;
              localStorage.removeItem('token');
              setUser({});
              setIsAuth(false);
              setOpenBox(false)
          })
          .catch((error) => {
            console.log(error.response.data.message);
          });
      } catch (error) {
        console.log(error);
      }

}