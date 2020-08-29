import * as actionTypes from '../actions';

const initialState = {
    results : []
}

const reducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {...state,
                results:[...state.results,action.counter]
            }
        case actionTypes.DELETE_RESULT:
            const newArr = [...state.results];
            newArr.splice(action.target,1);
            return {...state,
                results:newArr
            }
    }
    return state;
}

export default reducer;