import React from "react";
import ChallengeCard from "./ChallengeCard";
import { Typography } from "@material-ui/core";
import styles from "./Challenge.module.css";
import Scrollbars from "react-custom-scrollbars";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FIlterIcon from "@material-ui/icons/Tune";
import challenges from "../data/challenges";

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
        <Typography variant="h6">All Challenges</Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FIlterIcon color="primary" style={{ marginRight: 10 }} />
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            startIcon={<AddIcon />}
          >
            Create
          </Button>
        </div>
      </div>
      <Scrollbars>
        {challenges.map((c, k) => (
          <ChallengeCard key={k} challenge={c} />
        ))}
      </Scrollbars>
    </div>
  );
}
