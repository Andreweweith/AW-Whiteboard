import React from "react";
import Button from '@material-ui/core/Button';
import Home from '@material-ui/icons/Home';
import {Link} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

const HomeButton = () => {
    return (
        <div>
            <IconButton component={Link} to={'/home'}>
                <Home/>
            </IconButton>
        </div>
    )
};

export default HomeButton;