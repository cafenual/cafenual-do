import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import promise from "redux-promise";
import ReduxThunk from "redux-thunk";
import rootReducer from "_reducers";
import App from "./App";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

// 원래는 createStore만 하는데  그랬을 경우에는 store에서 객체밖에 못받아옴
// 미들웨어로 promise랑 thunk를 설정 해주면 함수, 프로미스 형태의 값도 store에서 받아올 수 있게됨

const customHistory = createBrowserHistory();

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ history: customHistory }),
      promise
    )
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
