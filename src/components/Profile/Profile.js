import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Profile.module.css";
import userImg from "./user.png";
import { Typography } from "@material-ui/core";

export default function (props) {
  return (
    <div className={styles["main"]}>
      <Typography variant="h6" align="right">
        Total Rewards : 65
        <span role="img" aria-label="star">
          &#11088;
        </span>
      </Typography>
      <div>
        <img
          className={styles["user-icon"]}
          src={userImg}
          alt="user-icon"
        ></img>
        <Typography variant="h6" align="center">
          Keanu Reeves
        </Typography>
        <Typography variant="subtitle1" align="center">
          Phd Student at CERN
        </Typography>
      </div>
      <Button variant="contained" color="primary" onClick={props.logout}>
        Logout
      </Button>
    </div>
  );
}
