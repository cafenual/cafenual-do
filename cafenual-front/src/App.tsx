import Footer from "layouts/Footer";
import Header from "layouts/Header";
import Commute from "pages/Commute";
import Join from "pages/Join";
import Login from "pages/Login";
import Main from "pages/Main";
import MenuUpload from "pages/MenuUpload";
import MenuView from "pages/MenuView";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div id="container">
      <BrowserRouter>
        <Header />
        <div id="main">
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/commute" component={Commute} />
            <Route path="/join" component={Join} />
            <Route path="/menu/list/:category?" exact component={MenuView} />
            <Route path="/menu/upload" exact component={MenuUpload} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
