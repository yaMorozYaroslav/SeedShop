import React from 'react'
import {createRoot} from 'react-dom/client'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import{ store} from './Redux/store'

import {App} from './App'

export const store = createStore(reducers, compose(applyMiddleware(thunk)))

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<Provider store={store}><App/></Provider>)