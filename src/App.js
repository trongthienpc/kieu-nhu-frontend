import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Page404 from "./pages/Page404";
import { getDirection } from "./helpers/Utils";
import React, { Suspense, useEffect } from "react";
import User from "./pages/user";
import ViewApp from "./pages/app";

function App({ locale }) {
  const direction = getDirection();
  useEffect(() => {
    if (direction.isRtl) {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
    }
  }, [direction]);
  return (
    <div className="h-100">
      {/* <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      > */}
      <>
        {/* <NotificationContainer /> */}

        <Suspense fallback={<div className="loading" />}>
          <Router>
            <Switch>
              {/* <Route path="/user" render={(props) => <ViewUser {...props} />} /> */}

              <Route path="/error" exact component={Page404} />
              <Route path="/user" component={User} />
              <Route path="/app" component={ViewApp} />

              <Redirect to="/error" />
            </Switch>
          </Router>
        </Suspense>
      </>
      {/* </IntlProvider> */}
    </div>
  );
}

export default App;
