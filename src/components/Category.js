import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Chip, Button, Typography } from "@material-ui/core";
import categoriesList from "./data/categories";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 10,
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    alignItems: "center",
    width: "100%",
  },
  margin: {
    margin: "10px 20px",
  },
});

export default (props) => {
  const classes = useStyles();
  const [categories, setCategories] = React.useState({});
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography
          variant="h6"
          color="primary"
          align="center"
          style={{ marginBottom: 30 }}
        >
          Choose your interest topics <br />
          for the challenges
        </Typography>
        <div
          style={{
            height: 400,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div className={classes.content}>
            {categoriesList.map((c, k) => (
              <Chip
                key={c.title}
                label={c.title}
                variant={c.selected || categories[k] ? "default" : "outlined"}
                color="secondary"
                style={{ margin: 2 }}
                clickable
                onClick={(e) => {
                  let temp = { ...categories };
                  if (temp[k]) {
                    delete temp[k];
                  } else {
                    temp[k] = true;
                  }
                  setCategories(temp);
                }}
              />
            ))}
          </div>
        </div>
        <Button
          variant="outlined"
          color="primary"
          onClick={props.gotoChallngesScreen}
          style={{ marginBottom: 30 }}
        >
          View Challenges
        </Button>
      </div>
    </React.Fragment>
  );
};
