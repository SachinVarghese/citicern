import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import DoneIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  root: {
    margin: 15,
    border: "1px solid lightgrey",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default function Task(props) {
  const classes = useStyles();
  const { task } = props;

  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardActionArea>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="body1">
            {task.title}
            <br></br>
            <span style={{ fontSize: 14 }}>{task.startDate}</span>
          </Typography>
          <CircularProgressWithLabel
            value={task.progress}
            completed={task.approved}
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        {!task.completed && (
          <Button size="small" color="secondary" variant="outlined">
            In progress
          </Button>
        )}
        {task.completed && (
          <Button size="small" color="primary">
            Completed
          </Button>
        )}

        {task.completed && (
          <Button size="small" color="default">
            {task.approved ? "Approved" : "Pending approval"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {!props.completed && (
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
          >{`${Math.round(props.value)}%`}</Typography>
        )}
        {props.completed && <DoneIcon color="secondary" />}
      </Box>
    </Box>
  );
}
