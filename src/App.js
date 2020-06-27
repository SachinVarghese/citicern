import React from "react";
import { Router, navigate } from "@reach/router";
import BottomNav from "./components/BottomNav";
import styles from "./App.module.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header";
import Login from "./components/Login";
import ChallengeList from "./components/Challenges/ChallengeList";

const basepath = "/citicern";
let Tasks = () => <div>Tasks</div>;

function App() {
  const [isLoggedIn, setLogin] = React.useState(false);

  const logout = () => {
    setLogin(false);
  };

  const login = () => {
    navigate(basepath);
    setLogin(true);
  };

  return (
    <div className={styles["App"]}>
      {isLoggedIn && (
        <React.Fragment>
          <div className={styles["AppContent"]}>
            <Header />
            <Router className={styles["AppContent"]} basepath={basepath}>
              <ChallengeList path="/" />
              <Tasks path="tasks" />
              <Profile path="profile" logout={logout} />
            </Router>
          </div>
          <BottomNav basepath={basepath} />
        </React.Fragment>
      )}
      {!isLoggedIn && <Login login={login}></Login>}
    </div>
  );
}

export default App;
