import React from "react";
import style from './profile.css'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/es/TextField/TextField";


const styles = theme => ({
    title: {
        color: "secondary",
    }
});

const profile = (props) => {
    const {classes} = props;

    return (
        <React.Fragment>
            <div className={style.profile}>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Card style={{ backgroundColor: '#dfdeff' }}>
                            <CardHeader
                                title="User Profile"
                            />
                            <CardContent>
                                <TextField
                                    margin="dense"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="surname"
                                    label="Surname"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="email"
                                    label="Email"
                                    type="email"
                                    fullWidth
                                    value={props.emailValue}
                                    onChange={props.handleEmail}
                                />
                                <TextField
                                    margin="dense"
                                    id="address"
                                    label="Address"
                                    type="text"
                                    fullWidth
                                />
                                <TextField
                                    margin="dense"
                                    id="postalcode"
                                    label="Postal code"
                                    type="text"
                                    fullWidth
                                />

                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
);
};

profile.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(profile);