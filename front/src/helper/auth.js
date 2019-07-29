import decode from 'jwt-decode';

export const token = {
  set: value => localStorage.credit_debit = value,
  get: () => localStorage.credit_debit,
  delete: () => delete localStorage.credit_debit
};

export const isAuthenticated = () => {
  let payload = null;
  const token = localStorage.getItem("credit_debit");

  if (!token) {
    return false;
  }

  try {
    payload = decode(token);
  } catch (e) {
    return false;
  }

  const { exp } = payload;

  if (exp < new Date().getTime() / 1000) {
    return false;
  }

  return true;
};