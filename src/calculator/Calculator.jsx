import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/es/Button/Button";
import {calculateRequest} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 100,
    },
    dense: {
        marginTop: 190,
    },
    menu: {
        width: 2000,
    },
});

const shipmentTypes = [
    {
        value: '1',
        label: 'OneDay',
    },
    {
        value: '2',
        label: 'TwoDay',
    },
    {
        value: '5',
        label: 'FiveDay',
    },
];

class Calculator extends React.Component {
    state = {
        currency: '1'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <div>
                    <div>
                        <TextField
                            id="From"
                            label="From"
                            placeholder="Moscow"
                            className={classes.textField}
                            margin="normal"
                        />

                        <TextField
                            id="To"
                            label="To"
                            placeholder="New-York"
                            className={classes.textField}
                            margin="normal"
                        />
                    </div>

                    <div align="center">
                        <TextField
                            className={classes.textField}
                            id="weight"
                            label="Weight"
                            placeholder="5"
                            helperText="In kilograms"
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            id="length"
                            label="Length"
                            placeholder="33"
                            helperText="In cm"
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            id="width"
                            label="Width"
                            placeholder="12"
                            helperText="In cm"
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            className={classes.textField}
                            id="height"
                            label="Height"
                            placeholder="20"
                            helperText="In cm"
                            margin="dense"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>

                    <div>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select"
                            className={classes.textField}
                            value={this.state.currency}
                            onChange={this.handleChange('currency')}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            helperText="Please select your currency"
                            margin="normal"
                        >
                            {shipmentTypes.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>

                    <Button color='primary' onClick={this.props.calculate}>
                        Calculate
                    </Button>
                    {this.props.price !== undefined &&
                    <div>
                        It will const you {this.props.price}
                    </div>
                    }
                </div>

            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    price: state.price
});

const mapDispatchToProps = (dispatch) => ({
    calculate: () => calculateRequest(dispatch)
});

Calculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calculator);