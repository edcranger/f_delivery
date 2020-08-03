import axios from "axios";
import { Cookies } from "quasar";

const Api = axios.create({
  withCredentials: true,
});

Api.interceptors.request.use(function (config) {
  const xsrfToken = Cookies.get("riderCsrf_id");

  if (xsrfToken) config.headers["X-XSRF-TOKEN"] = xsrfToken;

  return config;
});

export { Api };
