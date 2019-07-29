"use strict";

import decode from 'jwt-decode';


export const token = {
  set: value => localStorage.test = value,
  get: () => localStorage.test,
  delete: () => delete localStorage.test
};

export const isAuthenticated = () => {
  let payload = null;
  const token = localStorage.getItem('test');
  // const token = localStorage.getItem('touchcarePortal');

  if (!token) {
    return false;
  }

  // try {
  //   payload = decode(token);
  // } catch (e) {
  //   return false;
  // }

  // const { exp } = payload;

  // if (exp < new Date().getTime() / 1000) {
  //   return false;
  // }

  return true;
};