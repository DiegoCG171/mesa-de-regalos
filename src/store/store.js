import { wishListReducer } from "../reducers/wishListReducer";

const { createStore, combineReducers, compose, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { authReducer } = require("../reducers/authReducer");


const reducers = combineReducers({
    auth: authReducer,
    wishList: wishListReducer
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);