import { Cookies } from "quasar";

export const login_success = (state, payload) => {
  state.error = null;
  state.token = Cookies.get("riderCsrf_id");
  state.rider = payload.rider;
  state.status = "success";
};

export const login_failed = (state, err) => {
  state.error = err;
  state.state = "failed";
};

export const logout_success = (state) => {
  state.error = null;
  state.rider = {};
  state.status = "success";
};

export const logout_failed = (state, err) => {
  state.error = err;
  state.status = "failed";
};

export const getRiderInfo_success = (state, payload) => {
  state.error = null;
  state.rider = payload;
  state.status = "success";
};

export const getRiderInfo_failed = (state, err) => {
  state.error = err;
  state.status = "failed";
};
