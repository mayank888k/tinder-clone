import { Route, Switch,} from 'react-router-dom';
import './App.css';
import Account from './components/Account';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';
import Header from './components/Header'
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCards'

function App() {



  return (
    <div className="app">
      <Switch>

        <Route exact path="/">
          <Header />
          <TinderCards />
          <SwipeButtons />
        </Route>

        <Route exact path='/chats'>
          <Header backButton="/" />
          <Chats />
        </Route>

        <Route exact path='/chatscreen/:peopleId'>
          <ChatScreen />
        </Route>
        <Route exact path="/Account">
          <Header backButton="/" />
          <Account />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
