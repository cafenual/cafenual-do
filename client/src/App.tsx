import Join from "pages/AuthPage/RegisterPage";
import Login from "pages/AuthPage/LoginPage";
import DashBoard from "pages/AdminPage/AdminDashboardPage";
import { Route, Switch } from "react-router-dom";
import "styles/App.scss";
import Recipe from "pages/Recipe";
import CategoryManage from "pages/Recipe/CategoryManage";
import RecipeDetail from "pages/Recipe/RecipeDetail";
import Transition from "pages/Transition";
import RecipeUpload from "pages/Recipe/RecipeUpload";
import RecipeEdit from "pages/Recipe/RecipeEdit";
import Header from "components/Header";
import Aside from "components/Aside";
import Footer from "components/Footer";
import NoticePage from "pages/NoticePage/NoticePage";

function App() {
  return (
    <div id="container">
      <div id="main">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/join" component={Join} />
          <>
            <Header />
            <Aside />
            <Route path="/" exact component={DashBoard} />
            <Route path="/notice" component={NoticePage} />
            <Route path="/recipe/:category?" exact component={Recipe} />
            <Route path="/recipe/menu/:menuId" exact component={RecipeDetail} />
            <Route
              path="/recipe/manage/upload"
              exact
              component={RecipeUpload}
            />
            <Route path="/recipe/edit/:menuId" exact component={RecipeEdit} />
            <Route
              path="/recipe/manage/category"
              exact
              component={CategoryManage}
            />
            <Route path="/transition" exact component={Transition} />
          </>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
