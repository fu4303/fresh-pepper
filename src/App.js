import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Movie from "./Movie";
import Popular from "./Popular";
import requestURLs from "./requests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Movie} />
          <Route 
          path="/popular"
          render={(props) => (
            <Popular {...props} title="Popular" fetchURL={requestURLs.fetchPopular}/>
          )} />
          <Route 
          path="/trending"
          render={(props) => (
            <Popular {...props} title="Trending" fetchURL={requestURLs.fetchTopRated}/>
          )} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
