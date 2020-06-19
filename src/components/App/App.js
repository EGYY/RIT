import React from 'react';
import {connect} from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ShareIcon from '@material-ui/icons/Share';
import Zoom from "../Zoom/Zoom";
import Car from "../Car/Car";
import './App.css';
import details from "../details";
import { getClickedDetailInfo} from "../../redux/actions";

function App({data, getClickedDetailInfo}) {
        const deleteElem = (id) => {
            const objChancged = data.find(item => item.id == id);
            const newData = data.map(item => {
                if (item.id == id) {
                    objChancged.isActive = false;
                    return objChancged;
                }
                return item;
            });
            getClickedDetailInfo(newData);
        }

        const renderDetails = data.filter(item => item.isActive === true).map((detail) => {
            return(
                <div className="detail-item"  key={detail.id} >
                    <p>{detail.title}</p>
                    <div className='detail-delete' onClick={() => deleteElem(detail.id)}><IconButton aria-label='delete'><CloseIcon/></IconButton></div>
                </div>

            );
        });

        return (
            <div className="App" >
                <div className="top-head">
                    <ArrowBackIosIcon/>
                    <div className="top-head__main">
                        Повреждения
                    </div>
                    <ShareIcon/>
                </div>
                <div className="car-svg">
                    <Car/>
                    <Zoom/>
                </div>
                <div className="details">
                    {renderDetails}
                </div>
                <input type="button" id='next-btn' value='Следующий шаг'/>

            </div>
        );



}

const mapStateToProps = (state) => {
    return {
        data: state.testReducer.clickedDetailData
    }
}

export default connect(mapStateToProps, {getClickedDetailInfo})(App);
