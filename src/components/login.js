import React, { Fragment, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { facebookAuth, googleAuth, FirebasesignIn } from "../utils/Firebase";

import "./login.css";

const INITIAL_USER = {
  email: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState(INITIAL_USER);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = await FirebasesignIn();
    console.log(user);
  };

  const handleFacebook = async (event) => {
    event.preventDefault();
    const user = await facebookAuth();
    console.log(user);
  };

  const handleGoogle = async (event) => {
    event.preventDefault();
    const user = await googleAuth();
    console.log(user);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} style={{ display: "contents" }}>
        <div className="login-box">
          <h2>Login</h2>

          <TextField
            name="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            onChange={handleChange}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            onChange={handleChange}
          />

          <Divider style={{ margin: "10px", background: "white" }} />

          <Button
            variant="outlined"
            color="primary"
            style={{ width: "100%", height: "45px" }}
            type="submit"
          >
            Login
          </Button>

          <Divider style={{ margin: "40px" }} />

          <Button
            className="social-button facebook-connect"
            variant="outlined"
            id="facebook"
            onClick={handleFacebook}
          >
            Connect with Facebook
          </Button>

          <Divider style={{ margin: "10px", background: "white" }} />

          <Button
            className="social-button google-connect"
            variant="outlined"
            id="google"
            onClick={handleGoogle}
          >
            Connect with Google
          </Button>
        </div>
      </form>
    </Fragment>
  );
}

export default Login;
