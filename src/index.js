import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker'
import './index.css';

import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj7oidriu00nj0179x2ns6aj6'
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()