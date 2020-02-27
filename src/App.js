import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamComposition from './Components/teamComposition';
import projectTeamCost from './APICalls/projectTeamCostCall';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TeamComposition}/>
        <Route exact path={'/prices'} component={projectTeamCost}/>
      </Switch>
    </Router>
  )  
}

export default App;
