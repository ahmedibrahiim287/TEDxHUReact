import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Attend, Watch, Teleportation, Tangram,Legacy, Team, Sponsers, Contactus, Conductor,Notavailable } from "./components/index";
import ScrollToTop from "./components/ScrollToTop";


class App extends React.Component {

  
  render() {
  return (
    <div className="App">
      <Router >
        <Navigation />
        <ScrollToTop/>
        <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/Home" exact component={() => <Home />} />
       <Route path="/Attend" exact component={() => <Attend />} />
       <Route path="/Watch" exact component={() => <Watch />} />
       <Route path="/Conductor" exact component={() => <Conductor />} />
       <Route path="/Tangram" exact component={() => <Tangram />} />
       <Route path="/Teleportation" exact component={() => <Teleportation />} />
       <Route path="/Legacy" exact component={() => <Legacy />} />
       <Route path="/Team" exact component={() => <Team />} />
       <Route path="/Sponsers" exact component={() => <Sponsers />} />
       <Route path="/Contactus" exact component={() => <Contactus />} />
       <Route path="/Notavailable" exact component={() => <Notavailable />} />
       
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}}

export default App;
