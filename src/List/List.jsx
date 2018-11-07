import style from "./list.css";
import Paper from "@material-ui/core/Paper/Paper";
import MenuList from "@material-ui/core/MenuList/MenuList";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import React from "react";
import connect from "react-redux/es/connect/connect";
import profile from "../profile/profile";

const list = () => {
    return (
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
    )
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});

const List = connect(mapStateToProps, mapDispatchToProps)(list);

export default List;