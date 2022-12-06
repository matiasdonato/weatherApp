const initialState = {
    cities: [],
    cityInfo: {},
    found: true,
    avaible: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_CITY":

            for (let i = 0; i < state.cities.length; i++) {
                if (state.cities[i].id === action.payload.id) {
                    return {
                        ...state,
                        avaible: true,
                        found: true,
                    }
                }
            }
            return {
                ...state,
                found: true,
                avaible: false,
                cities: [...state.cities, action.payload]
            }

        case "DELETE_CITY":
            return {
                ...state,
                cities: state.cities.filter(c => c.id !== action.payload)
            }

        case "GET_CITY_INFO":
            let arrayCity = state.cities.filter(c => c.id === action.payload);
            return {
                ...state,
                cityInfo: arrayCity[0],
            }

        case "CITY_NOT_FOUND":
            return {
                ...state,
                found: false,
                avaible: false,
            }

        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;