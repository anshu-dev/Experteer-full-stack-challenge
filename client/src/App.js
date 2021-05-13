import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Description from "./components/Description";
import Theme from "./components/Theme";

function App() {
  return (
    <>
      <Router>
        <Theme>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/description/:jobId" exact component={Description} />
          </Switch>
        </Theme>
      </Router>
    </>
  );
}

export default App;
