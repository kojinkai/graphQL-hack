import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker'
import './index.css';

// 1
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

// 2
const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7oidriu00nj0179x2ns6aj6'
})

// 3
const client = new ApolloClient({
  networkInterface
})

// 4
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  , document.getElementById('root')
)
registerServiceWorker()