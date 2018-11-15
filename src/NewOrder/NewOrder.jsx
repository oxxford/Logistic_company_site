import React from "react";
import style from '../profile/Profile.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import connect from "react-redux/es/connect/connect";
import LeftList from "../List/LeftList.jsx"
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import CalculateForm from "../calculator/Form";
import {InfoForm} from "./InfoForm";
import {calculateRequest, newOrderRequest} from "../data/action-creators";

const createResponse = (props) => {
    return (
        props.success ? (
            <div className={style.button}>
                <Typography variant="display1">
                    Created! Id of your parcel is {props.data.order_id}
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

const calculateResponse = (props) => {
    return (
        props.price ? (
            <div className={style.button}>
                <Typography variant="subheading">
                    It will cost you {props.price}
                </Typography>
                <div className={style.div}/>
            </div>
        ) : (
            <div>
                {props.error}
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
                        <Typography variant="display1">
                            Parcel info
                        </Typography>
                        <CalculateForm/>
                        <div style={{margin: 30}}/>
                        <Typography variant="display1">
                            Receiver info
                        </Typography>
                        <InfoForm/>
                    </CardContent>


                    {props.success !== undefined &&
                    createResponse(props)
                    }

                    {props.price !== undefined &&
                    calculateResponse(props)
                    }

                    <span className={style.button}/>
                    <Button variant="contained" color="primary" onClick={props.create_request}>
                        Submit
                    </Button>
                    <span style={{margin: 80}}/>
                    <Button variant="contained" color="primary" onClick={props.calculate}>
                        Calculate price
                    </Button>
                    <div className={style.div}/>
                </Card>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    data: state.app.new_order_data,
    success: state.app.new_order_successful,
    error: state.app.new_order_error,
    price: state.app.price
});

const mapDispatchToProps = (dispatch) => ({
    create_request: () => dispatch(newOrderRequest()),
    calculate: () => dispatch(calculateRequest())
});

const NewOrder = connect(mapStateToProps, mapDispatchToProps)(order);

export default NewOrder;