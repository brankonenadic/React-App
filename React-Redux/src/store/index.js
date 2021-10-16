
import { createSlice, configureStore } from '@reduxjs/toolkit';

const currentState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
  name: 'counter',
  currentState,
  reducers:{
    increment(state) {
      state.counter++;
    },
    incrementes(state) {
      state.counter--;
    },
    decrement(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.counter = !state.counter;
    }
  }
});

const store = configureStore({
  reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions;
export default store;

/* import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const currentState = {counter: 0, showCounter: true};

const counterReducer = (state = currentState, action) => {
    if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }
  if (action.type === 'incrementes') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    };
  }
    if (action.type === 'decrement') {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        };
    }
    if (action.type === 'toggle') {
      return {
        counter: state.counter,
        showCounter: !state.showCounter
       };
    }
    return state;
};

const store = createStore(counterReducer);

export default store; */