import {ExampleState as State, Action, EXAMPLE} from 'storage/types';

const initialState: State = {
  dataExample: '',
};

const ExampleReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        dataExample: action.data,
      };

    default:
      return state;
  }
};

export default ExampleReducer;
