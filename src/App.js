import React from "react";
import Pizza from './components/Form'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation"
const App = () => {
  return (
    <React.Fragment>
      <Router>
      <Navigation />
      <Switch>
        <Route exact path= "/" component={Home}/>
        <Route exact path= "/Pizza" component={Pizza}/>
      </Switch>
      {/* <Form/> */}
      </Router>
    </React.Fragment>
  );
};
export default App;
