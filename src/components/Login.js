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
import citicernImg from "./citicern.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    padding: 10,
    backgroundImage: "url('" + citicernImg + "')",
    backgroundSize: "cover",
    backgroundPositionY: 60,
    backgroundRepeat: "no-repeat",
    marginTop: 70,
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
        <Typography variant="h6" color="primary" style={{ marginBottom: 30 }}>
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
        <Button
          variant="contained"
          color="primary"
          onClick={props.login}
          style={{ marginTop: 30 }}
        >
          Login
        </Button>
      </div>
    </React.Fragment>
  );
};
