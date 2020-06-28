import React from "react";
import { Typography } from "@material-ui/core";
import styles from "./Task.module.css";
import Scrollbars from "react-custom-scrollbars";
import FIlterIcon from "@material-ui/icons/Tune";
import tasks from "../data/tasks";
import Task from "./Task";

export default function (props) {
  return (
    <div className={styles["main"]}>
      <div
        style={{
          width: "90%",
          height: 50,
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">My Tasks</Typography>

        <FIlterIcon color="primary" />
      </div>
      <Scrollbars>
        {tasks.map((c, k) => (
          <Task
            key={k}
            task={c}
            onClick={() => {
              props.gotoChallngePage(c.id, { accepted: true });
            }}
          />
        ))}
      </Scrollbars>
    </div>
  );
}
