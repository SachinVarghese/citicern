import React from "react";
import { Router, navigate } from "@reach/router";
import BottomNav from "./components/BottomNav";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header";
import Login from "./components/Login";
import ChallengeList from "./components/Challenges/ChallengeList";
import TaskList from "./components/Tasks/TaskList";
import useMediaQuery from "@material-ui/core/useMediaQuery";

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
                  <ChallengeList path="" default />
                  <TaskList path="tasks" />
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
