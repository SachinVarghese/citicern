import React from "react";
import { Router, navigate } from "@reach/router";
import BottomNav from "./components/BottomNav";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header";
import Login from "./components/Login";
import ChallengeList from "./components/Challenges/ChallengeList";
import ChallengePage from "./components/Challenges/ChallengePage";
import TaskList from "./components/Tasks/TaskList";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Category from "./components/Category";

const basepath = "/citicern";

function App() {
  const [isLoggedIn, setLogin] = React.useState(false);

  const logout = () => {
    setLogin(false);
  };

  const login = () => {
    setLogin(true);
    navigate(basepath);
  };

  const gotoChallngesScreen = () => {
    navigate(basepath + "/challenges");
  };

  const gotoTasksScreen = () => {
    navigate(basepath + "/tasks");
  };

  const gotoChallngePage = (id, state) => {
    navigate(basepath + "/challenges/" + id, { state });
  };

  const gotoProfileScreen = () => {
    navigate(basepath + "/profile");
  };

  const mobileSize = useMediaQuery("(max-width:600px)");

  return (
    <React.Fragment>
      {mobileSize && (
        <div className={styles["App"]}>
          {isLoggedIn && (
            <React.Fragment>
              <div className={styles["AppContent"]}>
                <Header />
                <Router className={styles["AppContent"]} basepath={basepath}>
                  <Category
                    path=""
                    gotoChallngesScreen={gotoChallngesScreen}
                    default
                  />
                  <ChallengeList
                    path="challenges"
                    gotoChallngePage={gotoChallngePage}
                  />
                  <ChallengePage
                    path="challenges/:cid"
                    gotoTasksScreen={gotoTasksScreen}
                    gotoProfileScreen={gotoProfileScreen}
                  />
                  <TaskList path="tasks" gotoChallngePage={gotoChallngePage} />
                  <Profile path="profile" logout={logout} />
                </Router>
              </div>
              <BottomNav basepath={basepath} />
            </React.Fragment>
          )}
          {!isLoggedIn && <Login login={login}></Login>}
        </div>
      )}
      {!mobileSize && (
        <h2 style={{ margin: "auto", width: "fit-content" }}>
          Resoulution unsupported. Please switch to a mobile device.
        </h2>
      )}
    </React.Fragment>
  );
}

export default App;
