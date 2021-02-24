import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProvideToast from "./components/Generic/Toast/Providers/main";
import { ErrorPage, LaunchDetails, Toast } from "./components/index";
import Dashboard from "./Dashboard";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import client from "./utils/graphQL/main";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ProvideToast>
        <Router>
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route exact path="/mission/:id">
              <LaunchDetails />
            </Route>
            <Route exact path="*">
              <ErrorPage />
            </Route>
          </Switch>
        </Router>
        <Toast />
      </ProvideToast>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
