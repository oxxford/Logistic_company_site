import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from "@material-ui/core/es/Button/Button";
import {calculateRequest} from "../data/action-creators";
import connect from "react-redux/es/connect/connect";
import style from './Calculator.css'
import CalculateForm from './Form'
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 90,
    },
    dense: {
        marginTop: 190,
    },
    menu: {
        width: 2000,
    },
});

class Calculator extends React.Component {
    calculateResponse = () => {
        return (
            this.props.price ? (
                <div>
                    It will const you {this.props.price}
                </div>
            ) : (
                <div>
                    unsuccessful
                </div>
            )
        )
    };

    render() {
        const {classes} = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <div className={style.calculator}>
                    <Typography variant="h3">
                        Price calculation
                    </Typography>
                    <CalculateForm/>

                    <div style={{margin: 10}}/>

                    <Button color='primary' variant="contained" onClick={this.props.calculate} className={style.button}>
                        Calculate
                    </Button>
                    {this.props.price !== undefined &&
                        this.calculateResponse()
                    }
                </div>

            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    price: state.app.price
});

const mapDispatchToProps = (dispatch) => ({
    calculate: () => dispatch(calculateRequest())
});

Calculator = connect(mapStateToProps, mapDispatchToProps)(Calculator);

Calculator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calculator);