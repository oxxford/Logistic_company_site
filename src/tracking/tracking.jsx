import React from "react";
import {withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import style from './Tracking.css'
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
});

const Tracking = (props) => {
    const {classes} = props;

    return (
        <React.Fragment>
            <div className={style.space}>
                <Typography variant="display2">
                    Tracking a parcel
                </Typography>
            </div>
            <div className={style.field}>
                <TextField
                    id="tracking"
                    label="Tracking Number"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                />
            </div>
            <div className={style.button}>
                <Button variant="contained" color="primary">
                    find!
                </Button>
            </div>
        </React.Fragment>
    );

};

export default withStyles(styles)(Tracking);