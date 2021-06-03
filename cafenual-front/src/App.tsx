import Header from "layouts/Header";
import Commute from "pages/Commute";
import Join from "pages/Join";
import Login from "pages/Login";
import StaffDashBoard from "pages/Staff/StaffDashBoard";
import MenuDetail from "pages/MenuRecipe/MenuDetail";
import MenuModify from "pages/MenuRecipe/MenuModify";
import MenuUpload from "pages/MenuRecipe/MenuUpload";
import MenuView from "pages/MenuRecipe/MenuView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NoticeList from "pages/Notice/NoticeList";
import Transition from "pages/Transition";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <div id="main">
          <Switch>
            <Route path="/staff" exact component={StaffDashBoard} />
            <Route path="/login" component={Login} />
            <Route path="/commute" component={Commute} />
            <Route path="/join" component={Join} />
            <Route path="/menu/list/:category?" exact component={MenuView} />
            <Route path="/menu/upload" exact component={MenuUpload} />
            <Route path="/menu/detail/:id?" exact component={MenuDetail} />
            <Route path="/menu/modify/:id?" exact component={MenuModify} />
            <Route path="/notice" exact component={NoticeList} />
            <Route path="/transition" exact component={Transition} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
