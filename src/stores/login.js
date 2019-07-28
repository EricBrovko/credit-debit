import _ from 'lodash';
import { decorate, observable, action } from 'mobx';

import { token } from '../helper/auth';

class Login {
  email = "";
  password = "";
  showPassword = false;
  isLoading = false;
  errors = {
    email: false,
    password: false
  };

  updateEmail(email) {
    this.email = email;
    this.errors.email = false;
  }

  updatePassword(password) {
    this.password = password;
    this.errors.password = false;
  }

  isValidForm() {
    if (!this.email && !this.password) {
      this.errors.email = true;
      this.errors.password = true;
      return false;
    }

    // if (!props.REG_EXP_EMAIL.test(this.email) && !this.password) {
    //   this.errors.email = true;
    //   this.errors.password = true;
    //   return false;
    // }

    // if (props.REG_EXP_EMAIL.test(this.email) && !this.password) {
    //   this.errors.password = true;
    //   return false;
    // }

    // if (!this.email || !props.REG_EXP_EMAIL.test(this.email)) {
    //   this.errors.email = true;
    //   return false;
    // }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    // if (!this.isValidForm()) {
    //   return;
    // }

    this.login();
  }

  login() {
    this.isLoading = true;

    const params = {
      email: this.email,
      password: this.password
    };

    // postData('/auth', params, {}, true)
    //   .then(({ errors, token }) => {
    //     this.isLoading = false;

    //     if (errors) {
    //       return notification.error(props.getError(errors, 'Invalid Login Credentials'));
    //     }

    //     localStorage.touchcarePortal = token;
    //     window.location.href = '/';
    //   });

    console.log(`send log in`, params);
    this.isLoading = false;

    token.set("VERY LONG STRING from API");
    window.location.href = '/';
  }

  logout() {
    // userStore.isAuthenticated = false;
    // localStorage.removeItem('touchcarePortal');
    // localStorage.removeItem('touchcarePortalIID');
    token.delete();
    window.location.href = '/login';
  }
}


decorate(Login, {
  // observe props
  email: observable,
  password: observable,
  showPassword: observable,
  isLoading: observable,
  errors: observable,
  // bound actions
  updateEmail: action.bound,
  updatePassword: action.bound,
  isValidForm: action.bound,
  handleSubmit: action.bound,
  login: action.bound,
  logout: action.bound,
})

const loginStore = new Login();

export default loginStore;
