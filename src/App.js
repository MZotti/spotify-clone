import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Routes from './components/routes/Routes'
import Player from './components/Player/Player'
import Menu from './components/Menu/Menu';
import FriendsActivity from './components/FriendsActivity/FriendsActivity';
import MainNav from './components/MainNav/MainNav';

import './assets/css/style.scss'

function App() {
  return (
    <main>
      <Router>
      <div className="app">
        <Menu />
        <div className="container">
          <MainNav />
          <Routes />
        </div>
        <FriendsActivity />
      </div>
      <Player />
      </Router>
    </main>
  );
}

export default App;
