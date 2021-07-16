import Join from "pages/Join";
import Login from "pages/Login";
import DashBoard from "pages/DashBoard";
import { Route, Switch } from "react-router-dom";
import NoticeList from "pages/Notice/NoticeList";
import NoticeDetail from "pages/Notice/NoticeDetail";
import NoticeEdit from "pages/Notice/NoticeEdit";
import "./App.scss";
import Recipe from "pages/Recipe";
import CategoryManage from "pages/Recipe/CategoryManage";
import RecipeDetail from "pages/Recipe/RecipeDetail";
import Transition from "pages/Transition";
import RecipeUpload from "pages/Recipe/RecipeUpload";
import RecipeEdit from "pages/Recipe/RecipeEdit";
import NoticeUpload from "pages/Notice/NoticeUpload";

function App() {
  return (
    <div id="container">
      <div id="main">
        <Switch>
          <Route path="/" exact component={DashBoard} />
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <Route path="/notice" exact component={NoticeList} />
          <Route path="/notice/upload" exact component={NoticeUpload} />
          <Route path="/notice/edit/:id?" component={NoticeEdit} />
          <Route path="/notice/:noticeId?" component={NoticeDetail} />
          <Route path="/recipe/:category?" exact component={Recipe} />
          <Route path="/recipe/menu/:menuId" exact component={RecipeDetail} />
          <Route path="/recipe/manage/upload" exact component={RecipeUpload} />
          <Route path="/recipe/edit/:menuId" exact component={RecipeEdit} />
          <Route
            path="/recipe/manage/category"
            exact
            component={CategoryManage}
          />
          <Route path="/transition" exact component={Transition} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
