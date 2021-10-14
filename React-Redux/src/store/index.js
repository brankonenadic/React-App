import { createStore } from 'redux';

const counterReduser = (state = { counter: 0 }, action) => {
    if (action.tyoe === 'increment') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.tyoe === 'decrement') {
        return {
            counter: state.counter - 1,
        };
    }
    return state;
}

const store = createStore(counterReduser);

export default store;