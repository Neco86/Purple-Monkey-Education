import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'
import Entry from './pages/entry'
import Register from './pages/register'
import './store/mock.js'

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <BrowserRouter>
            {<Route path='/' exact component={Entry}></Route>}
            {<Route path='/register' exact component={Register}></Route>}
        </BrowserRouter>
    </Provider>
  );
}

export default App;
