import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result:result
    }
};

export const storeResult = (result) => {
    return (dispatch, getState) => { //this dispatch & getState is because of redux-thunk
        setTimeout(()=>{
            const oldCounter = getState().ctr.counter; //attention! do not overuse getState
            console.log(oldCounter);
            dispatch(saveResult(result)) //dispatch the synchronous action
        },2000)
    }
};


export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId:resultElId
    }
};