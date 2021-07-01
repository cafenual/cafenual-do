import Join from "pages/Join";
import Login from "pages/Login";
import DashBoard from "pages/DashBoard";

import { Route, Switch } from "react-router-dom";
import NoticeList from "pages/Notice/NoticeList";
import NoticeUpload from "pages/Notice/NoticeUpload";
import NoticeDetail from "pages/Notice/NoticeDetail";
import NoticeEdit from "pages/Notice/NoticeEdit";
import "./App.scss";
import Recipe from "pages/Recipe";
import RecipeManage from "pages/Recipe/RecipeManage";
import CategoryManage from "pages/Recipe/CategoryManage";
import RecipeDetail from "pages/Recipe/RecipeDetail";

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
          <Route path="/notice/:id?" component={NoticeDetail} />
          <Route path="/recipe" exact component={Recipe} />
          <Route path="/recipe/:id" exact component={RecipeDetail} />
          <Route path="/recipe/manage/recipe" exact component={RecipeManage} />
          <Route
            path="/recipe/manage/category"
            exact
            component={CategoryManage}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
