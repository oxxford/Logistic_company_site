import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import style from './Tracking.css'
import Button from "@material-ui/core/Button/Button";
import connect from "react-redux/es/connect/connect";
import TrackingForm from "./TrackingForm";
import {getParcelTracking} from "../data/action-creators";

const profileResponse = (props) => {
    return (
        props.success ? (
            <div className={style.button}>
                <Typography style={{ color: '#1cff11' }} variant="subheading">
                    Here is the information about your parcel: {props.data}
                </Typography>
                <div className={style.div}/>
            </div>
        ) : (
            <div className={style.button}>
                <Typography style={{ color: '#ff0817' }} variant="subheading">
                    {props.error}
                </Typography>
                <div className={style.div}/>
            </div>
        )
    )
};

const tracking = (props) => {

    return (
        <React.Fragment>
            <div className={style.space}>
                <Typography variant="display2">
                    Tracking a parcel
                </Typography>
            </div>
            <div className={style.field}>
                <TrackingForm/>
            </div>
            {
                props.success !== undefined &&
                profileResponse(props)
            }
            <div className={style.button}>
                <Button variant="contained" color="primary" onClick={props.request}>
                    find!
                </Button>
            </div>
        </React.Fragment>
    );

};

const mapStateToProps = (state) => ({
    data: state.app.track_data,
    success: state.app.track_successful,
    error: state.app.track_error
});

const mapDispatchToProps = (dispatch) => ({
    request: () => dispatch(getParcelTracking())
});

const Tracking = connect(mapStateToProps, mapDispatchToProps)(tracking);

export default Tracking;