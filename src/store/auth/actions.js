import { error } from "consola";
import { Api } from "../../boot/axios";

export const loginRider = async ({ commit }, payload) => {
  try {
    const res = await Api.post("/api/v1/riders/login", payload);

    if (res.data.success) {
      commit("login_success", res.data);
    }

    return res.data;
  } catch (error) {
    commit("login_failed", error.response.data.message);
  }
};

export const logoutRider = async ({ commit }) => {
  try {
    const res = await Api.get(`/api/v1/riders/logout`);

    if (res.data.success) {
      commit("logout_success");
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getRiderInfo = async ({ commit }) => {
  try {
    const res = await Api.get(`/api/v1/riders/me`);

    if (res.data.success) {
      commit("getRiderInfo_success", res.data.rider);
    }
    return res.data;
  } catch (err) {
    commit("getRiderInfo_failed", err.response.data.message);
  }
};
