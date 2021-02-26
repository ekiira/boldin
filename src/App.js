import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";

import Landing from "./pages/Landing/Landing";

const App = () => {
  return (
   <div className='App'>
      <Router>
      
      <Switch>
        <Route path="/" exact component={Landing} />

      </Switch>
    </Router>
   </div>
  );
};

export default App;
