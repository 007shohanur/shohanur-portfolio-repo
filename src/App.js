
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import { ContactMe } from './Components/contactMe/contactMe';

import Home from './Components/home/Home';
import MySkills from './Components/mySkills/MySkills';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/Home">
        <Home></Home>
      </Route>
      <Route path="/ContactMe">
        <ContactMe></ContactMe>
      </Route>
      <Route path="/mySkills">
        <MySkills></MySkills>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
