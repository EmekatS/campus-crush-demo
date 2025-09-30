export const ACTION_TYPES = {
    CHANGE_INPUT: 'CHANGE_INPUT',

}

export const INITIAL = {
    fullName: "",
    gender: "",
    dob: null,
    uniName: "",
    course: "",
    bio: "",
    profilePicture: null,
    profileImages: [],
    email: "",
    password: "",
    cPassword: ""
}

export const signupReducer = (state, action) => {
    switch(action.type){
        case ACTION_TYPES.CHANGE_INPUT:
            return {
                ...state,
                [action.payload.name]:action.payload.value
            }
        default:
            return state;
    }
}