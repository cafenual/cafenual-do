import DashBoard from "pages/DashboardPage";
import { Route, Switch } from "react-router-dom";
import "styles/App.scss";
import Transition from "pages/Transition";
import Header from "components/Header";
import Aside from "components/Aside";
import Footer from "components/Footer";
import NoticePage from "pages/Notice";
import RecipePage from "pages/Recipe";
import LoginPage from "pages/Auth/LoginPage";
import RegisterPage from "pages/Auth/RegisterPage";
import AccountInfoPage from "pages/Auth/AccountInfoPage";
import AdminPage from "pages/Admin";
import Scheduler from "pages/Scheduler";

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
            <Route path="/admin" component={AdminPage} />
            <Route path="/scheduler" component={Scheduler} />
          </>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
