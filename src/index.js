import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import { rootReducer } from './redux/rootReducer.js'
import Loading from './components/Loading.jsx'
import { loadState, saveState } from './redux/localStorage.js'
const App = React.lazy(() => import('./App.jsx'));

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

store.subscribe(() => {
    saveState(store.getState());
});

const app = 
    <Provider store={store}>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </Provider>;

ReactDOM.render(
    <BrowserRouter>
        {app}
    </BrowserRouter>,
    document.getElementById('root')
) 