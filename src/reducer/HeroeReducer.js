export const ADD_HERO = 'ADD_HERO'

const initialState = {
    Company: '',
    Name: '',
    Movie: '',
    PhotoUrl: ''
}

const HeroeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HERO:
            return {
                ...state,
                Company: state.Company,
                Name: state.Name,
                Movie: state.Movie,
                PhotoUrl: state.PhotoUrl
            }
        /*case 'NEW_HERO':
            return {
                logged: false
            }
        case 'EDIT_HERO':
            return {
                logged: false
            }
        case 'DELETE_HERO':
            return {
                logged: false
            }*/
        default:
            return state
    }
}

export default HeroeReducer;