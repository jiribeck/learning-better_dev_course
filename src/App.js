import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Lesson01 from './lessons/lesson01';
import Lesson02 from './lessons/lesson02';
import Lesson03 from './lessons/lesson03';
import Lesson04 from './lessons/lesson04';
import Lesson05 from './lessons/lesson05';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/lesson01" component={Lesson01} exact />
          <Route path="/lesson02" component={Lesson02} exact />
          <Route path="/lesson03" component={Lesson03} exact />
          <Route path="/lesson04" component={Lesson04} exact />
          <Route path="/lesson05" component={Lesson05} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
