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
import Button from "@material-ui/core/es/Button/Button";
import LeftList from "../List/LeftList";

const styles = theme => ({
    title: {
        color: "secondary",
    }
});

const Orders = (props) => {
    const {classes} = props;

    return (
        <React.Fragment>
            <LeftList/>
            <div className={style.orders}>
                <Typography variant="display2">
                    My orders
                </Typography>
                <Grid>
                    <Grid item md={8}>
                        <Card style={{backgroundColor: '#dfdeff'}} className={style.card}>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <Typography variant="headline">
                                            Order #1
                                        </Typography>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <Typography variant="subheading">
                                            Status: in progress <br/>
                                            From: Kazan <br/>
                                            To: Moscow
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant="contained" color={"primary"} className={style.button}>
                                            Tracking
                                        </Button>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item md={8}>
                        <Card style={{backgroundColor: '#dfdeff'}} className={style.card}>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <Typography variant="headline">
                                            Order #2
                                        </Typography>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <Typography variant="subheading">
                                            Status: finished <br/>
                                            From: Innopolis <br/>
                                            To: Kazan
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant="contained" color={"primary"} className={style.button}>
                                            Tracking
                                        </Button>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid item md={8}>
                        <Card style={{backgroundColor: '#dfdeff'}} className={style.card}>
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <Typography variant="headline">
                                            Order #3
                                        </Typography>
                                    </ListItem>
                                    <Divider/>
                                    <ListItem>
                                        <Typography variant="subheading">
                                            Status: in progress <br/>
                                            From: New York <br/>
                                            To: Moscow
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Button variant="contained" color={"primary"} className={style.button}>
                                            Tracking
                                        </Button>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
};

export default withStyles(styles)(Orders);