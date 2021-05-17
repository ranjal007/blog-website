import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogPage from './Components/BlogPage'
import Blog from './Components/Blog'
import Home from './Components/Home'
import Webniar from './Components/Webniar'
import TopBar from './Components/TopBar/TopBar'
function App() {
  return (
    <div className="d-flex align-items-center justify-content-center" >
        <div className="w-100" >
        
      <Router>
        <TopBar/>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/webniar" component={Webniar}></Route>
            <Route exact path="/blog" component={BlogPage}></Route>
            <Route path="/blog/:id" component={Blog}></Route>
          </Switch>
  
      </Router>
</div>
    </div>
  );
}

export default App;
