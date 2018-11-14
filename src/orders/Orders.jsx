import React from 'react'
import style from './Orders.css'
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import {withStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography/Typography";
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import LeftList from "../List/LeftList";
import connect from "react-redux/es/connect/connect";
import {ordersRequest} from "../data/action-creators";
import Button from "@material-ui/core/Button/Button";
import Link from "react-router-dom/es/Link";

const styles = theme => ({
    title: {
        color: "secondary",
    }
});

const generate = (props) => {
    props.request();
    return (
        props.data.map((order) => (
            <Card style={{backgroundColor: '#dfdeff'}} className={style.card}>
                <CardContent>
                    <List>
                        <ListItem>
                            <Typography variant="headline">
                                Order with id {order.order.id}
                            </Typography>
                        </ListItem>
                        <Divider/>
                        <ListItem>
                            <Typography variant="subheading">
                                Status: {order.order.status} <br/>
                                From: Kazan <br/>
                                To: Moscow <br/>
                                Current position: {order.order.cur_pos === -1 ? "In home" : order.order.cur_pos}
                            </Typography>
                        </ListItem>
                    </List>
                </CardContent>
            </Card>
        ))
    )
};

const noorders = () => {
    return (
        <div style={{width: 500}}>
            <div style={{margin: 50}}/>
            <Typography variant="display1">
                You have no orders yet
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/neworder">
                Create one
            </Button>
        </div>
    )
};

const orders = (props) => {
    return (
        <React.Fragment>
            <LeftList/>
            <div className={style.orders}>
                <Typography variant="display2">
                    My orders
                </Typography>
                <Grid>
                    <Grid item md={8}>
                        {(props.data ?
                            (
                                noorders()
                            ) : (
                                generate(props)
                            )
                        )}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    success: state.app.orders_successful,
    error: state.app.orders_error,
    data: state.app.orders_data
});

const mapDispatchToProps = (dispatch) => ({
    request: () => dispatch(ordersRequest())
});

const Orders = connect(mapStateToProps, mapDispatchToProps)(orders);

export default withStyles(styles)(Orders);