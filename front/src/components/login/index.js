import React from "react";
import { observer, inject } from "mobx-react";
import { Form, Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import styles from "./index.module.css";

const LoginView = ({ loginStore, userStore }) => (
    <Form
        className={styles.loginForm}
        onSubmit={loginStore.handleSubmit}>
        <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
                className={`${loginStore.errors.email ? "has-error-block" : ""}`}
                autoFocus
                type="email"
                value={loginStore.email}
                onChange={e => loginStore.updateEmail(e.target.value)}
            />
        </FormGroup>
        <FormGroup controlId="password" >
            <FormLabel>Password</FormLabel>
            <FormControl
                className={`${loginStore.errors.password ? "has-error-block" : ""}`}
                value={loginStore.password}
                onChange={e => loginStore.updatePassword(e.target.value)}
                type="password"
            />
        </FormGroup>
        <Button
            block
            disabled={loginStore.isLoading}
            type="submit">
                Login
        </Button>
    </Form>
);

const Login = inject("loginStore")(observer(LoginView));

export default Login;
