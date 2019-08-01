import { decorate, observable, action } from 'mobx';

import API from "../API";
import { token as tokenHelper } from "../helper/auth";
import props from "../helper/props";
import notification from "../helper/notification";

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

    if (!props.REG_EXP_EMAIL.test(this.email) && !this.password) {
      this.errors.email = true;
      this.errors.password = true;
      return false;
    }

    if (props.REG_EXP_EMAIL.test(this.email) && !this.password) {
      this.errors.password = true;
      return false;
    }

    if (!this.email || !props.REG_EXP_EMAIL.test(this.email)) {
      this.errors.email = true;
      return false;
    }

    return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.isValidForm()) {
      return;
    }

    this.login();
  }

  login() {
    this.isLoading = true;
    // {
    //   "email": "admin@dot.com",
    //   "password": "admin"
    // }
    API.post("/auth", {
      email: this.email,
      password: this.password
    })
      .then(res => {
        this.isLoading = false;
        const { data: { token } } = res;
        tokenHelper.set(token);
        window.location.href = "/";
      })
      .catch(error => {
        this.isLoading = false;
        console.log(`error`, error.response);
        notification.error(props.getError(error, "Something went wrong"));
      });
  }

  logout() {
    tokenHelper.delete();
    window.location.href = "/login";
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
