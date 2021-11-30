import { TYPES } from '../types';

const appReducer = (state = {}, action) => {
    switch (action.type) {
        case TYPES.MOVIES_LIST:
            return { ...state, ...action.payload };

        case TYPES.MOVIES_REQUEST_ERROR:
            return { ...state, ...action.payload };

        case TYPES.MOVIE_ITEM:
            return { ...state, ...action.payload };

        case TYPES.MOVIE_VOTE:
            return { ...state, ...action.payload };

        default:
            return state;
    }
}

export default appReducer;