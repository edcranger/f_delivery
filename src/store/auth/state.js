import { Cookies } from "quasar";

export default function () {
  return {
    token: Cookies.get("riderCsrf_id") || "",
    rider: {},
    status: "",
    error: null,
  };
}
