import React from 'react';
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import { GlobalStyle } from './style.js'
import { GlobalIconStyle } from './statics/iconfont/iconfont.js'

function App() {
  return (
    <Provider store={store}>
        <GlobalStyle/>
        <GlobalIconStyle/>
        <BrowserRouter>
            {/*<Route path='/' exact component={Enter}></Route>*/}
        </BrowserRouter>
        xxx
    </Provider>
  );
}

export default App;
