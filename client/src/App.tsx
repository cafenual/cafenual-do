import Join from "pages/Join";
import Login from "pages/Login";
import StaffDashBoard from "pages/Staff/StaffDashBoard";
import MenuDetail from "pages/MenuRecipe/MenuDetail";
import MenuModify from "pages/MenuRecipe/MenuModify";
import MenuUpload from "pages/MenuRecipe/MenuUpload";
import MenuView from "pages/MenuRecipe/MenuView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NoticeList from "pages/Notice/NoticeList";
import NoticeUpload from "pages/Notice/NoticeUpload";
import NoticeDetail from "pages/Notice/NoticeDetail";
import NoticeEdit from "pages/Notice/NoticeEdit";
import StaffAccountInfo from "pages/Staff/StaffAccountInfo";
import StaffPayroll from "pages/Staff/StaffPayroll";
import StaffScheduler from "pages/Staff/StaffScheduler";
import "./App.scss";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <div id="main">
          <Switch>
            <Route path="/staff" exact component={StaffDashBoard} />
            <Route
              path="/staff/accountinfo"
              exact
              component={StaffAccountInfo}
            />
            <Route path="/staff/payroll" exact component={StaffPayroll} />
            <Route path="/staff/scheduler" exact component={StaffScheduler} />
            <Route path="/login" component={Login} />
            <Route path="/join" component={Join} />
            <Route path="/menu/list/:category?" exact component={MenuView} />
            <Route path="/menu/upload" exact component={MenuUpload} />
            <Route path="/menu/detail/:id?" exact component={MenuDetail} />
            <Route path="/menu/modify/:id?" exact component={MenuModify} />
            <Route path="/notice" exact component={NoticeList} />
            <Route path="/notice/upload" exact component={NoticeUpload} />
            <Route path="/notice/edit/:id?" component={NoticeEdit} />
            <Route path="/notice/:id?" component={NoticeDetail} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
