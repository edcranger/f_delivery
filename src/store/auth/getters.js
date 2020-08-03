export const isLoggedIn = (state) => !!state.token;

export const getRider = (state) => state.rider;

export const getAuthErr = (state) => state.error;
