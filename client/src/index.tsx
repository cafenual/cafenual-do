import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "modules";
import { SetUser } from "modules/users";
import { BrowserRouter } from "react-router-dom";

function loadUser() {
  try {
    let user = sessionStorage.getItem("user");
    if (!user) return;
    console.log(JSON.parse(user));
    store.dispatch(SetUser(JSON.parse(user)));
  } catch (e) {
    console.log(`loadUser 오류`);
  }
}

loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
