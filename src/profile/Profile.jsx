import React from "react";
import style from './Profile.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import connect from "react-redux/es/connect/connect";
import LeftList from "../List/LeftList.jsx"
import ProfileForm from "./ProfileForm";
import Button from "@material-ui/core/Button/Button";
import {profileRequest} from "../data/action-creators";
import Typography from "@material-ui/core/Typography/Typography";

const profileResponse = (props) => {
    return (
        props.updated ? (
            <div className={style.button}>
                <Typography style={{ color: '#1cff11' }} variant="subheading">
                    Information updated
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


const profile = (props) => {
    return (
        <React.Fragment>
            <LeftList/>
            <div className={style.space}>
                <Typography variant="display2" >
                    User profile
                </Typography>
                <Card style={{ backgroundColor: '#dfdeff' }} className={style.menu}>

                    <CardContent>
                        <ProfileForm/>
                    </CardContent>


                    {props.updated !== undefined &&
                        profileResponse(props)
                    }

                    <span className={style.button}/>
                    <Button variant="contained" color="primary" onClick={props.request}>
                        Change
                    </Button>
                    <div className={style.div}/>
                </Card>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    updated: state.app.profile_updated,
    error: state.app.profile_error
});

const mapDispatchToProps = (dispatch) => ({
    request: () => dispatch(profileRequest())
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(profile);

export default Profile;