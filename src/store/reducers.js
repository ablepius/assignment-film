import * as actionTypes from './actionTypes';
import { updateObject } from './utility';

const initialState = {
    initialValue: 0,
    characters: [],
    films : []
};

const addValue = (state, action) => {
    const updatedState = {
        initialValue: state.initialValue + action.payload
    }
    return updateObject( state, updatedState );
};

const fetchCharacters = (state, action) => {
    const updatedState = {
        characters : action.payload.results
    }
    return updateObject( state, updatedState );
};

const updateFilm = (state, action) => {
    console.log(action.payload.title);
    // const updatedState = {
    //     films : state.films.push(action.payload.title)
    // }
    // return updateObject( state, updatedState );

    const newItem = state.films.push(action.payload.title);
    return [   // a new array
      ...state, // explode the old state first
      newItem   // then add the new item at the end
    ];
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD: return addValue( state, action );
        case actionTypes.FETCH_CHARCTERS: return fetchCharacters( state, action );
        case actionTypes.FETCH_FILMS: return updateFilm( state, action );
        default: return state;
    }
};

export default reducer;