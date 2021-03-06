import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import {reducer} from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    app: reducer,
    form: formReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
