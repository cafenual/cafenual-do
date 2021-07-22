import DashBoard from "pages/AdminPage/AdminDashboardPage";
import { Route, Switch } from "react-router-dom";
import "styles/App.scss";
import Transition from "pages/Transition";
import Header from "components/Header";
import Aside from "components/Aside";
import Footer from "components/Footer";
import NoticePage from "pages/Notice";
import RecipePage from "pages/Recipe";
import LoginPage from "pages/AuthPage/LoginPage";
import RegisterPage from "pages/AuthPage/RegisterPage";
import AccountInfoPage from "pages/AuthPage/AccountInfoPage";

function App() {
  return (
    <div id="container">
      <div id="main">
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <>
            <Header />
            <Aside />
            <Route path="/" exact component={DashBoard} />
            <Route path="/notice" component={NoticePage} />
            <Route path="/recipe/:category?" component={RecipePage} />
            <Route path="/transition" exact component={Transition} />
            <Route path="/accountinfo" exact component={AccountInfoPage} />
          </>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
