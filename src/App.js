import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
// import { BrowserRouter,Route } from 'react-router-dom'
import { HashRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'
import Entry from './pages/entry'
import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import './store/mock.js'

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <HashRouter>
            {<Route path='/' exact component={Entry}></Route>}
            {<Route path='/register' exact component={Register}></Route>}
            {<Route path='/login' exact component={Login}></Route>}
            {<Route path='/home' exact component={Home}></Route>}
        </HashRouter>
    </Provider>
  );
}

export default App;
