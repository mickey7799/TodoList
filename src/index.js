import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { createStore } from 'redux'
import configureStore from './store/configureStore'
import App from './containers/App'

const store = configureStore()

export default class extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
