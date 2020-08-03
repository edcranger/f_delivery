export const inventoryRequest_success = (state, payload) => {
  state.error = null;
  state.inventory = payload.deliveries;
  state.status = "success";
};

export const inventoryRequest_failed = (state, err) => {
  state.error = err;
  state.status = "failed";
};
