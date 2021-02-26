import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Lesson01 from './lessons/lesson01';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/lesson01" component={Lesson01} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
