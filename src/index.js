import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import * as serviceWorker from './serviceWorker';
// components
import App from './components/App';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

const history = createBrowserHistory();
const cache = new InMemoryCache();
const link = new HttpLink({ uri: 'https://countries.trevorblades.com/' });

const client = new ApolloClient({ 
  cache, 
  link,
  resolvers: {
    Query: {
      cont: () => ({__typename: "Cont", code: "AS"})
    },
    Mutation: {}
  },
  typeDefs: `
    type Query {
      cont: {
        code: String
      }
    }
  `
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/countries/:code" component={CountryDetails} />
    </Router>
  </ApolloProvider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
