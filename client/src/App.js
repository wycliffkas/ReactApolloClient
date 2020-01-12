import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches';
import Histories from './components/Histories';
import Launch from './components/Launch';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Rocket from './components/Rocket';
import History from './components/History';
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
        <Route exact path="/histories" component={Histories} />
        <Route exact path="/rockets" component={Rockets} />
        <Route exact path="/launch/:flight_number" component={Launch} />
        <Route exact path="/rockets/:rocket_id" component={Rocket} />
        <Route exact path="/history/:id" component={History} />
      </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
