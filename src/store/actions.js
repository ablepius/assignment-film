import * as actionTypes from './actionTypes';

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        payload: value
    };
};

export const setCharacters = (response) => {
    return {
        type: actionTypes.FETCH_CHARCTERS,
        payload: response
    };
};

export const setFilms = (response) => {
    return {
        type: actionTypes.FETCH_FILMS,
        payload: response
    };
};

export const onInitCharacters = () => {
    return dispatch => {
        return fetch(`https://swapi.dev/api/people/`
            ,
            {
                method: "GET",
            }
        )
            .then(res => res.json())
            .then(response => {
                return dispatch(setCharacters(response));

            })
            .catch(error => console.log(error));
    };
};

export const fetchFilms = (UrlList) => {
    return dispatch => {
        UrlList.map(url => dispatch(fetchFilm(url)))
    }
};

export const fetchFilm = (Url) => {
    return dispatch => {
        return fetch(Url
            ,
            {
                method: "GET",
            }
        )
            .then(res => res.json())
            .then(response => {
                dispatch(setFilms(response));

            })
            .catch(error => console.log(error));
    };
};