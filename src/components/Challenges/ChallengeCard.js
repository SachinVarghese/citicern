import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 15,
    border: "1px solid lightgrey",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

export default function ChallengeCard(props) {
  const classes = useStyles();

  const c = props.challenge;

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
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {c.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Typography style={{ marginLeft: "auto" }}>
          {`Points : ${c.points}`}
          <span role="img" aria-label="star">
            &#11088;
          </span>
        </Typography>
      </CardActions>
    </Card>
  );
}
