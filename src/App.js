import React from "react";
import Button from "@material-ui/core/Button";
import { Router } from "@reach/router";
import BottomVav from "./components/BottomVav";
import styles from "./App.module.css";

let Home = () => <div>Home</div>;
let Dash = () => (
  <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  </div>
);

function App() {
  return (
    <div className={styles["App"]}>
      <div className={styles["AppContent"]}>
        <Router>
          <Home path="/" />
          <Dash path="dashboard" />
          <Dash path="profile" />
        </Router>
      </div>
      <BottomVav></BottomVav>
    </div>
  );
}

export default App;
