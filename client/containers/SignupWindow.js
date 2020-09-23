import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grey from "@material-ui/core/colors/grey";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Teal from '@material-ui/core/colors/teal';
import { Button, FormGroup, FormControl, FormControlLabel } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import Fade from "@material-ui/core/Fade";
import validator from 'email-validator';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Link from "@material-ui/core/Link";
import Redirect from "react-router-dom/es/Redirect";


const useStyles = makeStyles(theme => ({
    root: {
        //backgroundColor: Grey[900],
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: theme.spacing(5),
        height: '100vh',
        minWidth: '100vw',
        maxWidth: '100vw',
        //paddingTop: '10%',
        '& > *': {
            //margin: theme.spacing(1),
            width: '65vw',
            maxWidth: '65vw',
            minWidth: '65vw',
            height: theme.spacing(100),
        },
    },
    loginArea: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: Grey[300],
    },
    textGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingTop: theme.spacing(50),
        spacing: theme.spacing(5),
    },
    textField: {
        marginTop: theme.spacing(3),
        color: Teal[300],
        alignSelf: 'left',

        '& label.Mui-focused': {
            color: Teal[300],
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: Teal[300],
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: Grey[700],
                color: Grey[100],
            },
            '&:hover fieldset': {
                borderColor: Teal.A700,
            },
            '&.Mui-focused fieldset': {
                borderColor: Teal.A400,
            },
        },
    },
    formControl: {
        display: 'flex',
        flexDirection: 'column'
    },
    backButton: {
        marginBottom: -23,

    }
}));

function SignupWindow(props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState(false);
    const [emailHelperText, setEmailHelperText] = useState("");

    const [clicked, setClicked] = useState(false);

    const classes = useStyles();


    function goBack() {
        props.history.push("/");
    }

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function check(text)
    {
        if (validator.validate(email)){
            console.log("valid email")
            props.history.push("/login");
        }
        else{
            console.log("invalid email")
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        try {
            fetch("http://localhost:4000/signup/", {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    password: password
                }),
            })
            .then(res => res.text())
            .then(text => check(text));


        } catch (e) {
            alert(e.message);

        }
    }

    function handleChange(event) {

        setEmail(event.target.value);

        if (email.length <= 1) {
            setError(false);
            setEmailHelperText("");
        }
        else {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(email)) {
                setError(true);
                setEmailHelperText("Invalid Email Address");
            }
            else {
                setError(false);
                setEmailHelperText("");
            }
        }
    }

    function handleClick() {
        setClicked(!clicked);

        goBack();
    }

    return (
        <Grid container xs={12} className={classes.root}>
            <Fade in={true} timeout={1000}>
                <Paper elevation={4} className={classes.loginArea}>
                    <Grid container xs={11} className={classes.textGrid}>
                        <Typography variant='title' color='secondary'>
                            <Box fontSize={24} fontWeight='bold' letterSpacing={8}>WHITEBOARD SIGNUP</Box>
                        </Typography>
                        <form className={classes.textField} onSubmit={handleSubmit} noValidate autoComplete={"off"}>
                            <Fade in={true} timeout={3000}>
                                <TextField
                                    variant={"outlined"}
                                    margin={"normal"}
                                    required
                                    fullWidth
                                    id={"email"}
                                    label={"Email"}
                                    name={"email"}
                                    autoComplete={"email"}
                                    autoFocus
                                    value={email}
                                    onChange={e => handleChange(e)}
                                    error={error}
                                    helperText={emailHelperText}
                                />
                            </Fade>
                            <Fade in={true} timeout={3000}>
                                <TextField
                                    variant={"outlined"}
                                    margin={"normal"}
                                    required
                                    fullWidth
                                    id={"name"}
                                    label={"Name"}
                                    name={"name"}
                                    autoComplete={"name"}
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Fade>
                            <Fade in={true} timeout={3000}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Fade>
                            <Fade in={true} timeout={3000}>
                                <span>&nbsp;&nbsp;</span>
                            </Fade>
                            <Fade in={true} timeout={3000}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={3}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            onClick={handleClick}
                                        >
                                            <Grid container spacing={4} className={classes.backButton}>
                                                <Grid item xs={12} sm={4}>
                                                    <NavigateBeforeIcon/>
                                                </Grid>
                                                <Grid item xs={12} sm={7}>
                                                    Back
                                                </Grid>
                                            </Grid>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="secondary"
                                            className={classes.submit}
                                            block
                                            disabled={!validateForm()}
                                        >
                                            Sign Up
                                        </Button>
                                    </Grid>
                                </Grid>

                            </Fade>
                            {/*<FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <Input id="component-outlined" value={email} onChange={handleChange} />
                        </FormControl>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="component-outlined">Password</InputLabel>
                            <Input id="component-outlined" value={password} onChange={handleChange} />
                        </FormControl>*/}
                        </form>
                    </Grid>
                </Paper>
            </Fade>
        </Grid>
    )
}

export default SignupWindow;
