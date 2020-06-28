import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import challenges from "../data/challenges";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    border: "1px solid lightgrey",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  buttons: {
    margin: 10,
    width: "-webkit-fill-available",
  },
}));

export default function ChallengePage(props) {
  const classes = useStyles();
  const expanded = true;
  let cid = props.cid || challenges[0].id;
  const c = challenges.filter((c) => c.id === cid)[0];
  const accepted = props.location.state.accepted;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{ backgroundColor: c.color }}>
            {c.title ? c.title[0] : "C"}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={c.title}
        subheader={c.creationDate}
      />
      <CardMedia className={classes.media} image={c.img} title={c.title} />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="points">
          <Typography>
            {`${c.points}`}
            <span role="img" aria-label="star">
              &#11088;
            </span>
          </Typography>
        </IconButton>
        <Chip
          label={c.difficulty}
          variant="outlined"
          color="secondary"
          style={{ margin: 2, marginLeft: "auto" }}
        />
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            paragraph
          >
            {c.description}
          </Typography>
          <Typography paragraph variant="overline">
            Note:
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography
            paragraph
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Submit pictures and data samples for approval.
          </Typography>
        </CardContent>
      </Collapse>
      {accepted && (
        <Button
          variant="contained"
          color="default"
          className={classes.buttons}
          startIcon={<CloudUploadIcon />}
        >
          Upload Files
        </Button>
      )}
      <Button
        variant="contained"
        color="secondary"
        className={classes["buttons"]}
        onClick={() => {
          props.gotoTasksScreen();
          props.handleOpenNotification({
            message: !accepted ? "Challenge Accepted!" : "Challenge submitted!",
          })();
        }}
      >
        {!accepted ? "Accept Challenge" : "Submit for approval"}
      </Button>
    </Card>
  );
}
