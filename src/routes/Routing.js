import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { map } from "lodash";
import configRouting from "./configRouting";

export default function Routing(props) {
    const {setRefresh} = props;
  return (
    <Router>
      <Switch>
        {map(configRouting, (route, index) => {
          return (
            <Route key={index} path={route.path} exact={route.exact}>
              <route.page setRefresh={setRefresh} />
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
}
