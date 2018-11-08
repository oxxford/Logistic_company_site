import style from "./list.css";
import Paper from "@material-ui/core/Paper/Paper";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import React from "react";
import connect from "react-redux/es/connect/connect";
import Link from "react-router-dom/es/Link";

const list = () => {
    return (
        <div className={style.menu_items}>
            <Paper className={style.menu}>
                <MenuList>
                    <MenuItem component={Link} to="/neworder">
                        Create new order
                    </MenuItem>
                    <MenuItem component={Link} to="/orders">
                        My orders
                    </MenuItem>
                    <MenuItem component={Link} to="/profile">
                        Profile
                    </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const LeftList = connect(mapStateToProps, mapDispatchToProps)(list);

export default LeftList;