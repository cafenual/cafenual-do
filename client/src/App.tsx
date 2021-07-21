import Join from "pages/AuthPage/RegisterPage";
import Login from "pages/AuthPage/LoginPage";
import DashBoard from "pages/AdminPage/AdminDashboardPage";
import { Route, Switch } from "react-router-dom";
import "styles/App.scss";
import Transition from "pages/Transition";
import Header from "components/Header";
import Aside from "components/Aside";
import Footer from "components/Footer";
import NoticePage from "pages/Notice/NoticePage";
import RecipePage from "pages/Recipe/RecipePage";

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
            <Route path="/recipe/:category?" component={RecipePage} />
            <Route path="/transition" exact component={Transition} />
          </>
        </Switch>
        <Footer />
      </div>
    </div>
  );
}

export default App;
