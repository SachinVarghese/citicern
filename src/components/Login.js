import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Button,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PasswordIcon from "@material-ui/icons/VpnKey";
import Header from "./Header";

const useStyles = makeStyles({
  root: {
    border: "1px solid lightgrey",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
  },
  margin: {
    margin: "10px 20px",
  },
});

export default (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header />
      <div className={classes.root}>
        <Typography variant="h6" color="primary">
          Welocme to CitiCERN App
        </Typography>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Enter Username
          </InputLabel>
          <Input
            id="username"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">
            Enter Password
          </InputLabel>
          <Input
            id="password"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant="contained" color="primary" onClick={props.login}>
          Login
        </Button>
      </div>
    </React.Fragment>
  );
};
