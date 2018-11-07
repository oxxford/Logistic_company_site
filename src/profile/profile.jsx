import React from "react";
import style from './profile.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import connect from "react-redux/es/connect/connect";
import List from "../List/List.jsx"
import ProfileForm from "./ProfileForm";
import Button from "@material-ui/core/Button/Button";
import {profileRequest} from "../data/action-creators";
import Typography from "@material-ui/core/Typography/Typography";

const profileResponse = (props) => {
    return (
        props.profile_updated ? (
            <div className={style.button}>
                <Typography style={{ color: '#1cff11' }} variant="subheading">
                    Information updated
                </Typography>
                <div className={style.div}/>
            </div>
        ) : (
            <div className={style.button}>
                <Typography style={{ color: '#ff0817' }} variant="subheading">
                    Unsuccessful
                </Typography>
                <div className={style.div}/>
            </div>
        )
    )
};


const profile = (props) => {
    return (
        <React.Fragment>
            <List/>
            <div className={style.space}>
                <Card style={{ backgroundColor: '#dfdeff' }} className={style.menu}>
                    <CardHeader
                        title="User Profile"
                    />
                    <CardContent>
                        <ProfileForm/>
                    </CardContent>


                    {props.profile_updated !== undefined &&
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
    profile_updated: state.app.profile_updated
});

const mapDispatchToProps = (dispatch) => ({
    request: () => dispatch(profileRequest())
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(profile);

export default Profile;