import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});
const initialAuthState = {
  isAuth: false
};

const authSlice =  createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.initialAuthState = true;
    },
    logOut(state) {
      state.initialAuthState = false;
    }
  }
});

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

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