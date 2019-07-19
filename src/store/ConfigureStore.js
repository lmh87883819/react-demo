import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../reducers/index'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
// const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore)

export default function configureStore(initialState) {
    const store = createStore(persistedReducer, applyMiddleware(thunkMiddleware))
    // createStoreWithMiddleware(rootReducer, initialState)
    const persistor = persistStore(store);
    return { persistor, store }
}