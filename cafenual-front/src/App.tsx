import MessengerFriendsList from "components/Messenger/FriendsList";
import MessengerMessage from "components/Messenger/Message";
import Header from "layouts/Header";
import Commute from "pages/Commute";
import Join from "pages/Join";
import Login from "pages/Login";
import Main from "pages/Main";
import MenuUpload from "pages/MenuUpload";
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
            <Route path="/messenger" exact component={MessengerFriendsList} />
            <Route path="/messenger/message" component={MessengerMessage} />
            <Route path="/menu" exact component={MenuUpload} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
