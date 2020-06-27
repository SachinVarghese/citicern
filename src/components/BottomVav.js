import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import UserIcon from "@material-ui/icons/SupervisedUserCircle";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    border: "1px solid lightgrey",
  },
});

const OptionsList = [
  {
    label: "Recents",
    icon: <RestoreIcon />,
    link: "",
  },
  {
    label: "Challenges",
    icon: <FavoriteIcon />,
    link: "dashboard",
  },
  {
    label: "Profile",
    icon: <UserIcon />,
    link: "profile",
  },
];

export default function () {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(_, newValue) => {
        navigate("/" + OptionsList[newValue].link);
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
