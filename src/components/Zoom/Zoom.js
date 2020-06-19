import React from "react";
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import IconButton from '@material-ui/core/IconButton';
import {connect} from 'react-redux';

import {zoomIn} from "../../redux/actions";
import './testzoom.css';

const Zoom = ({scale, zoomIn}) => {
    const zoomInSvg = () => {
        const svgCar = document.getElementById('car');
        const newScale = scale + 0.1;
        svgCar.style.transform = `scale(${newScale})`;
        zoomIn(newScale);

    }
    const zoomOutSvg = () => {
        const svgCar = document.getElementById('car');
        const newScale = scale - 0.1;
        svgCar.style.transform = `scale(${newScale})`;
        zoomIn(newScale);
    }

    return (
        <div className='zoom'>
            <div className="zoom-plus">
                <IconButton aria-label="zoom-in"  onClick={() => zoomInSvg()}>
                    <ZoomInIcon/>
                </IconButton>

            </div>
            <div className="zoom-minus">
                <IconButton aria-label="zoom-out" onClick={() => zoomOutSvg()}>
                    <ZoomOutIcon/>
                </IconButton>

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
   return {
       scale: state.testReducer.scale
   };
}

export default connect(mapStateToProps,{zoomIn})(Zoom);