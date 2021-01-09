const { createStore, combineReducers, compose, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { authReducer } = require("../reducers/authReducer");


const reducer = combineReducers({
    auth: authReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);