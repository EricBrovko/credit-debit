"use strict";

import _ from 'lodash';
import {observable, action, computed} from 'mobx';

class UserStore {
    @observable email = "";


//   @action.bound  
//   updateEmail(email) {
//     this.email = email;
//     this.errors.email = false;
//   }

//   @action.bound  
//   updatePassword(password) {
//     this.password = password;
//     this.errors.password = false;
//   }

//   @action.bound  
//   isValidForm() {
//     if (!this.email && !this.password) {
//       this.errors.email = true;
//       this.errors.password = true;
//       return false;
//     }

//     if (!props.REG_EXP_EMAIL.test(this.email) && !this.password) {
//       this.errors.email = true;
//       this.errors.password = true;
//       return false;
//     }

//     if (props.REG_EXP_EMAIL.test(this.email) && !this.password) {
//       this.errors.password = true;
//       return false;
//     }

//     if (!this.email || !props.REG_EXP_EMAIL.test(this.email)) {
//       this.errors.email = true;
//       return false;
//     }

//     return true;
//   }
  
//   @action.bound  
//   handleSubmit(event) {
//     userStore.handleSubmit(event);

//     if (!this.isValidForm()) {
//       return;
//     }

//     this.login();
//   }
  
//   @action.bound  
//   login() {
//     userStore.isLoading = true;

//     const params = {
//       email: this.email,
//       password: this.password
//     };

//     postData('/auth', params, {}, true)
//       .then(({errors, token}) => {
//         userStore.isLoading = false;

//         if (errors) {
//           return notification.error(props.getError(errors, 'Invalid Login Credentials'));
//         }

//         userStore.isAuthenticated = true;
//         localStorage.touchcarePortal = token;
//         window.location.href = '/';
//       });  
//   }
  
//   @action.bound  
//   logout() {
//     userStore.isAuthenticated = false;
//     localStorage.removeItem('touchcarePortal');
//     localStorage.removeItem('touchcarePortalIID');
//     window.location.href = '/login';
//   }
}

export default new UserStore();
