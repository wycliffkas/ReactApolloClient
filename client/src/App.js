import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Rocket from './components/Rocket';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Launches} />
        <Route exact path="/launches" component={Launches} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/launch/:flight_number" component={Launch} />
        <Route exact path="/rockets/:rocket_id" component={Rocket} />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
