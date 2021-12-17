import React from 'react';
import { useState } from 'react';
import GitBasics from './components/GitBasics';
import GitBranchMerge from './components/GitBranchMerge';
import GitChange from './components/GitChange';
import GitSynchronize from './components/GitSynchronize';
import Header from './components/Header';

import classes from './Style.module.css';

function App() {
  const [basicsIsShown, setBasicsIsShown] = useState(false);
  const [branchMergeIsShown, setBranchMergeIsShown] = useState(false);
  const [changeIsShown, setChangeIsShown] = useState(false);
  const [synchronizeIsShown, setSynchronizeIsShown] = useState(false);

  const toggleBasicsHandler = () => {
    setBasicsIsShown((basicsIsShown) => !basicsIsShown);
  };

  const toggleBranchMergeHandler = () => {
    setBranchMergeIsShown((branchMergeIsShown) => !branchMergeIsShown);
  };
  const toggleChangeHandler = () => {
    setChangeIsShown((changeIsShown) => !changeIsShown);
  };
  const toggleSynchronizeHandler = () => {
    setSynchronizeIsShown((synchronizeIsShown) => !synchronizeIsShown);
  };

  return (
    <React.Fragment>
      <Header />
      <button className={classes.basics} onClick={toggleBasicsHandler}>
        Git Basics
      </button>
      {basicsIsShown && <GitBasics />}

      <button
        className={classes.branchmerge}
        onClick={toggleBranchMergeHandler}>
        Git Branching and Merging
      </button>
      {branchMergeIsShown && <GitBranchMerge />}

      <button className={classes.change} onClick={toggleChangeHandler}>
        Git Make a Change
      </button>
      {changeIsShown && <GitChange />}

      <button
        className={classes.synchronize}
        onClick={toggleSynchronizeHandler}>
        Git Synchronize
      </button>
      {synchronizeIsShown && <GitSynchronize />}
    </React.Fragment>
  );
}

export default App;
