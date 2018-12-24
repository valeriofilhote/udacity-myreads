import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import mainReducer from './store/reducer'
import App from './App'
import './index.css'

const store = createStore(mainReducer)
const MyApp = <Provider store={store}><App /></Provider>

ReactDOM.render(MyApp, document.getElementById('root'))
