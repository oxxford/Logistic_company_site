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

const styles = theme => ({
    title: {
        color: "secondary",
    }
});

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
                        {data.map((order) => (
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
                                                Status: {order.status} <br/>
                                                From: Kazan <br/>
                                                To: Moscow <br/>
                                            </Typography>
                                        </ListItem>
                                    </List>
                                </CardContent>
                            </Card>
                        ))}
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
});

const Orders = connect(mapStateToProps, mapDispatchToProps)(orders);

export default withStyles(styles)(Orders);