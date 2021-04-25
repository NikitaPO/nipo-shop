export const getUserInfoFromLocalStorage = () =>
  localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;
