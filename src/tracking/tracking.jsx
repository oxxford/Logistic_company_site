import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import style from './Tracking.css'
import Button from "@material-ui/core/Button/Button";
import connect from "react-redux/es/connect/connect";
import TrackingForm from "./TrackingForm";
import {profileRequest} from "../data/action-creators";

const profileResponse = (props) => {
    return (
        props.profile_updated ? (
            <div>
                <Typography variant="subheading">
                    Here is the information about your parcel:
                </Typography>
            </div>
        ) : (
            <div>
                <Typography variant="subheading">
                    Couldn't find your tracking number.
                </Typography>
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
                props.profile_updated !== undefined &&
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const Tracking = connect(mapStateToProps, mapDispatchToProps)(tracking);

export default Tracking;