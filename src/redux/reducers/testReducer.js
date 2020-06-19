import {GET_SCALE_NUM, GET_CLICKED_DETAIL} from "../types";
import {initialState} from "../../components/details";

const testReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CLICKED_DETAIL:
            return {...state, clickedDetailData: action.payload};

        case GET_SCALE_NUM:
            return {...state, scale: action.payload};

        default:
            return state;
    }
}

export default testReducer;