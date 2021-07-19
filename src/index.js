import { createStore } from 'redux';
 
console.log("Starting banking app for multiple accounts")

const defaultState = {
  checking: 100,
  saving: 100
};

const ACTION_DEPOSIT = 'DEPOSIT';
const ACTION_WITHDRAWAL = 'WITHDRAWAL';

function createDeposit(account, amount) {
  return {
    type: ACTION_DEPOSIT,
    payload: {
      account,
      amount
    }
  };
}

function createWithdrawal(account, amount) {
  return {
    type: ACTION_WITHDRAWAL,
    payload: {
      account,
      amount
    }
  };
}

function account(state=defaultState, action) {
  switch(action.type) {
    case ACTION_DEPOSIT:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] + action.payload.amount
      }; 
    case ACTION_WITHDRAWAL:
      return {
        ...state,
        [action.payload.account]: state[action.payload.account] - action.payload.amount
      }; 
  }
  return state;
}

const store = createStore(account);
store.subscribe(() => {
  console.log('State updated');
  const state = store.getState();
  console.log(state);
})

window.store = store;
window.createDeposit = createDeposit;
window.createWithdrawal = createWithdrawal;