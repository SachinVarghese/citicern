import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./Profile.module.css";
import userImg from "./user.png";
import { Typography } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function (props) {
  return (
    <div className={styles["main"]}>
      <div className={styles["points-content"]}>
        <Typography variant="h6" align="right">
          Total Points : 65
          <span role="img" aria-label="star">
            &#11088;
          </span>
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          endIcon={<ChevronRightIcon />}
        >
          Exchange for Rewards
        </Button>
      </div>

      <div className={styles["user-content"]}>
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
      <Button variant="text" className={styles["buttons"]}>
        View Challenge History
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className={styles["buttons"]}
        onClick={props.logout}
      >
        Logout
      </Button>
    </div>
  );
}
