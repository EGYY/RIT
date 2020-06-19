import {GET_CLICKED_DETAIL, GET_SCALE_NUM} from "./types";


const delay = ms => new Promise(r => setTimeout(() => r(), ms));

const getClickedDetailInfo = (data) => {
    return async dispatch => {
        await delay(1000);
        try {
            dispatch({type:GET_CLICKED_DETAIL, payload:data})
        }catch (e) {
            console.log(e);
        }
    }
}

const zoomIn = (scale) => {
    return {type:GET_SCALE_NUM, payload:scale};
}


export {
    getClickedDetailInfo,
    zoomIn
}