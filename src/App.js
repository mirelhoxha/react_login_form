import { Route, Switch } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Calendar from "./pages/Calendar";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/favorites">
          <Calendar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
