import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Attend, Watch, Event1, Event2, Event3, Team, Sponsers, Contactus } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
       <Route path="/Home" exact component={() => <Home />} />
       <Route path="/Attend" exact component={() => <Attend />} />
       <Route path="/Watch" exact component={() => <Watch />} />
       <Route path="/Event1" exact component={() => <Event1 />} />
       <Route path="/Event2" exact component={() => <Event2 />} />
       <Route path="/Event3" exact component={() => <Event3 />} />
       <Route path="/Team" exact component={() => <Team />} />
       <Route path="/Sponsers" exact component={() => <Sponsers />} />
       <Route path="/Contactus" exact component={() => <Contactus />} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
