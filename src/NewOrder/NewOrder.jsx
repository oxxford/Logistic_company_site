import React from "react";
import style from '../profile/Profile.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import connect from "react-redux/es/connect/connect";
import LeftList from "../List/LeftList.jsx"
import Button from "@material-ui/core/Button/Button";
import {profileRequest} from "../data/action-creators";
import Typography from "@material-ui/core/Typography/Typography";
import CalculateForm from "../calculator/Form";

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


const order = (props) => {
    return (
        <React.Fragment>
            <LeftList/>
            <div className={style.space}>
                <Typography variant="display2" >
                    Create a new order
                </Typography>
                <Card style={{ backgroundColor: '#dfdeff' }} className={style.menu}>
                    <CardContent>
                        <CalculateForm/>
                    </CardContent>


                    {props.profile_updated !== undefined &&
                    profileResponse(props)
                    }

                    <span className={style.button}/>
                    <Button variant="contained" color="primary" onClick={props.request}>
                        Submit
                    </Button>
                    <div className={style.div}/>
                </Card>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const NewOrder = connect(mapStateToProps, mapDispatchToProps)(order);

export default NewOrder;