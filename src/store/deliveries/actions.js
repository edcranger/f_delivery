import { Api } from "../../boot/axios";

export const getRiderInventory = async ({ commit }) => {
  try {
    const res = await Api.get(`/api/v1/riders/inventory`);
    if (res.data.success) {
      commit("inventoryRequest_success", res.data);
    }
    return res.data;
  } catch (err) {
    commit("inventoryRequest_failed", err.response.data.message);
  }
};
