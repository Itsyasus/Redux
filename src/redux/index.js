import { DEC, INC } from './action';

const initialState = {
  counter: 0
}

export default (state= initialState, action) => {
    switch (action.type) {
        case INC:
          return { 
              ...state, 
            counter: state.counter + 1 
        };
  
        case DEC:
          return { 
              ...state, 
            counter: state.counter - 1 
        };
  
        default:
          return state;
  
      }
};