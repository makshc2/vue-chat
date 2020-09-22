function setAuthToken(config) {
  const customConfig = { ...config };
  const token = localStorage.getItem(process.env.VUE_APP_LS_TOKEN_KEY);
  customConfig.headers.Authorization = `Bearer ${token}`;
  return customConfig;
}

export default function (axios) {
  axios.interceptors.request.use(setAuthToken);
  axios.interceptors.response.use((res) => res, (error) => {
    if (error.response.statusText === 'Unauthorized') {
      localStorage.removeItem(process.env.VUE_APP_LS_TOKEN_KEY);
    }
  });
}
