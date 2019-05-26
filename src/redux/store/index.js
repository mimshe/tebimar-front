import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
import storage from 'redux-persist/lib/storage'
import {persistStore, persistReducer} from 'redux-persist'

const middleware = [thunk];
middleware.push(createLogger());

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
let store = createStore(persistedReducer
    , undefined,
    compose(
        applyMiddleware(...middleware)
    )
);
let persistor = persistStore(store);

export default {store,persistor}
