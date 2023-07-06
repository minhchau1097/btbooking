import data from './../bt-booking/danhSachGhe.json'

const initialState = {
    seatList: data,
    seatSelectedList: []
}
const seatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_SEAT': {
            let seatSelectClone = [...state.seatSelectedList]
            let index = seatSelectClone.findIndex((seat) => seat.soGhe === action.seat.soGhe);
            if (index !== -1) {
                seatSelectClone.splice(index, 1)
            } else {
                seatSelectClone.push(action.seat)
            }
            state.seatSelectedList = seatSelectClone
        }

            return { ...state }
        case 'DELETE_SEAT': {
            let seatSelectClone = [...state.seatSelectedList]
            let index = seatSelectClone.findIndex((seat) => seat.soGhe === action.seat.soGhe);
            if (index !== -1) {
                seatSelectClone.splice(index, 1)
                state.seatSelectedList = seatSelectClone
            }
        }
        return { ...state }
        default:

            return { ...state }
    }
}


export default seatReducer;