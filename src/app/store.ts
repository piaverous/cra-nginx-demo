import { createStore, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory()

function todos(state = [], action: any) {
    switch (action.type) {
        case 'ADD_TODO':
        return state
        default:
        return state
    }
}

const store = createStore(combineReducers({
    todos,
    router: connectRouter(history),
}), {}, undefined)

export default store;