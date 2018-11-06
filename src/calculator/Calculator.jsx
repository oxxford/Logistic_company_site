import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/es/Button/Button";
import {calculateRequest} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";
import Form from "./Form";

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
                    <Form/>

                    <div style={{margin: 10}}/>

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
    calculate: () => dispatch(calculateRequest())
});

Calculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calculator);