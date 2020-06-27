import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ListIcon from "@material-ui/icons/List";
import FavoriteIcon from "@material-ui/icons/Star";
import UserIcon from "@material-ui/icons/AccountCircle";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    border: "1px solid lightgrey",
  },
});

const OptionsList = [
  {
    label: "Challenges",
    icon: <ListIcon />,
    link: "",
  },
  {
    label: "My Tasks",
    icon: <FavoriteIcon />,
    link: "tasks",
  },
  {
    label: "Profile",
    icon: <UserIcon />,
    link: "profile",
  },
];

export default function (props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        navigate(props.basepath + "/" + OptionsList[newValue].link);
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      {OptionsList.map((opt) => (
        <BottomNavigationAction
          key={opt.label}
          label={opt.label}
          icon={opt.icon}
        />
      ))}
    </BottomNavigation>
  );
}
