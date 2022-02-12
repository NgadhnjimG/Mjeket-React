import React, { Component, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Users } from "../temp/users";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { saveUser } from "../redux/userSlice";
import { saveToken } from "../redux/tokenSlice";
import { login } from "../services/userService";

import api from '../api';

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState(Users[0]);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    var obj = {
      email,
      password,
    };

    console.log(obj);
    login(obj).then((res) => {
      if (res.data) {
        const token = JSON.stringify(res.data);
        dispatch(saveToken(token));
        localStorage.setItem("token", token);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        navigate("/dashboard");
      } else {
        alert("Kredencialet e gabuara");
        localStorage.removeItem('token');
        delete api.defaults.headers.common.Authorization;
      }
    });
    // if (email == users.email && password == users.password) {
    //   dispatch(saveUser(users));
    //   navigate("/dashboard");
    // }
  }
  return (
    <Container className="mt-5 mb-5 col-lg-3 col-sm-12">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="sm" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          size="lg"
          type="submit"
          disabled={!validateForm()}
          className="m-auto"
        >
          Login
        </Button>
      </Form>
    </Container>
  );
};
