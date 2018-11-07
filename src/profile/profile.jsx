import React from "react";
import style from './profile.css'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from "@material-ui/core/es/TextField/TextField";
import connect from "react-redux/es/connect/connect";
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from "@material-ui/core/Toolbar/Toolbar";


const profile = () => {
    return (
        <React.Fragment>
            <div className={style.menu_items}>
                <Paper className={style.menu}>
                    <MenuList>
                        <MenuItem>
                           Create new order
                        </MenuItem>
                        <MenuItem >
                            My orders
                        </MenuItem>
                        <MenuItem >
                            Profile
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
            <div className={style.space}>
                <Card style={{ backgroundColor: '#dfdeff' }} className={style.menu}>
                    <CardHeader
                        title="User Profile"
                    />
                    <CardContent>
                        <TextField
                            margin="dense"
                            id="login"
                            label="Login"
                            type="text"
                            fullWidth
                        />

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
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state) => ({
    userData: state.userData
});

const mapDispatchToProps = (dispatch) => ({
});

const Profile = connect(mapStateToProps, mapDispatchToProps)(profile);

export default profile;