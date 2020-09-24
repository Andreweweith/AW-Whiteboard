import React from "react";
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const AccountButton = () => {
    return (
        <div>
            <IconButton component={Link} to={'/home/account'}>
                <AccountCircle/>
            </IconButton>
        </div>
    )
};

export default AccountButton;