const defaultState = {
  data: []
};

export const houseReducer = (state = defaultState, action) => {
  switch (action.type) {
    
    case 'GET_HOUSE_DATA': 
    return {...state,
      data: action.houses
    };
  
    default: 
    return state;
  };
}