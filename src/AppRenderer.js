import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// import { Provider } from "react-redux";
// import { configureStore } from "./redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //    <Provider store={store}>
  <Suspense fallback={<div className="loading" />}>
    <App />
  </Suspense>
  //  </Provider>
);
