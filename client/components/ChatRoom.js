import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grey from "@material-ui/core/colors/grey";
import Teal from "@material-ui/core/colors/teal";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import grey from "@material-ui/core/colors/grey";
import teal from "@material-ui/core/colors/teal";

/* SOURCE: https://github.com/gregnb/material-ui-chat/blob/feature/prototype/src/ChatRoom.js */

const peopleStyles = theme => ({
    root: {
        overflowY: 'scroll',
        overflowX: 'hidden',
        height: '100%',
        '&::-webkit-scrollbar': {
            width: '5px',
            height: '8px',
            backgroundColor: 'rgba(103,120,129,0.0)',
            //backgroundColor: '#FFF'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: /*'#025279'*/ '#23232F' /*'#0595DD'*/
        },
    },
    avatarList: {
        backgroundColor: 'rgba(35,35,47,0.8)',
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px',
        marginTop: '6px',
        marginBottom: '6px',
        width: '95%',
        minWidth: '180px',
        maxWidth: '215px',
        //marginRight: '0px',
        marginLeft: '7px'
    },
    peopleName: {
        color: teal['A200']
    },
    peopleListHeader: {
        width: '100%',
        padding: '10px',
        paddingLeft: '20px'
    },
    divider: {
        height: '6px',
        backgroundColor: grey['800']
    }
});

class PeopleList extends React.Component {

    render() {

        const { classes } = this.props;

        let images = [
            { name: 'Rob Boberts', avatar: 'https://randomuser.me/api/portraits/men/37.jpg' },
            { name: 'Jason Gilbert', avatar: 'https://randomuser.me/api/portraits/men/93.jpg' },
            { name: 'Jeffrey Hill', avatar: 'https://randomuser.me/api/portraits/men/54.jpg' },
            { name: 'Ramona Harris', avatar: 'https://randomuser.me/api/portraits/women/82.jpg' },
            { name: 'Todd Howard', avatar: 'https://randomuser.me/api/portraits/men/63.jpg' },
            { name: 'Bob Loblaw', avatar: 'https://randomuser.me/api/portraits/men/19.jpg' },
            { name: 'Noah Silva', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' },
            { name: 'Sara Smith', avatar: 'https://randomuser.me/api/portraits/women/29.jpg' },
            { name: 'Paula Soto', avatar: 'https://randomuser.me/api/portraits/women/1.jpg' },
        ];

        /*for (let i = 0; i < 5; i++) {
            images = images.concat(images);
        }*/

        return (
            <List container className={classes.root} alignContent={'flex-end'} justifyContent={'flex-end'} direction={'row'}>
                <Grid container alignContent={'center'} justifyContent={'center'} className={classes.peopleListHeader}>
                    <Grid item xs={12} alignContent={'center'}>
                        <Typography variant='title' className={classes.chatTitle} color='secondary'>
                            <Box fontWeight='bold' letterSpacing={6}>MEMBERS</Box>
                        </Typography>
                    </Grid>
                </Grid>

                <Divider className={classes.divider} />

                {images.map((item, index) => (
                    <React.Fragment>
                        <ListItem key={index} dense button className={classes.avatarList}>
                            <Grid container alignItems={"center"}  spacing={6}>
                                <Grid item xs={3} justify={"left"}>
                                    <Avatar alt='Remy Sharp' src={item.avatar} />
                                </Grid>
                                <Grid item xs={9} alignContent={"center"}>
                                    <ListItemText className={classes.peopleName} primary={item.name} />
                                </Grid>
                            </Grid>
                        </ListItem>
                        {index !== images.length-1 && <Divider key={index} />}
                    </React.Fragment>
                ))}
            </List>
        );
    }

}

PeopleList = withStyles(peopleStyles)(PeopleList);


/* ----------------- */

const chatTextStyles = (theme) => ({
    root: {
        margin: '8px',
        height: 'calc(100% - 100px)',
    },
    chatInputPaper: {
        height: 'calc(100% - 64px)'
    },
    chatInput: {
        overflowY: 'scroll',
        height: '100%',
        padding: '16px',
         '&::-webkit-scrollbar': {
           width: '8px',
           height: '12px',
           backgroundColor: 'rgba(103,120,129,0.4)'
         },
         '&::-webkit-scrollbar-thumb': {
           backgroundColor: /*'#025279'*/ '#23232F' //'#0595DD'
         },
    },
    composeInputPaper: {
        marginTop: '16px'
    },
    composeInput: {
        padding: '16px',
        '&::-webkit-scrollbar': {
            width: '8px',
            height: '12px',
            backgroundColor: 'rgba(103,120,129,0.4)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: /*'#025279'*/ '#23232F' //'#0595DD'
        },
    },
    sendIcon: {
        color: '#2196f3'
    },
    chatRoomMessage: {
        display: 'flex',
        marginBottom: '8px'
    },
    messageText: {
        padding: '8px 0px 0px 16px'
    },
    divider: {
        marginBottom: '8px'
    }
});

class ChatText extends React.Component {

    static propTypes = {
        onSubmitMessage: PropTypes.func.isRequired,
    }
    state = {
        message: '',
    }

    render() {
        const { classes } = this.props;

        let images = [
            { name: 'Ramona Harris', avatar: 'https://randomuser.me/api/portraits/women/82.jpg', message: 'Welcome to Whiteboard!' },
            { name: 'Bob Loblaw', avatar: 'https://randomuser.me/api/portraits/men/19.jpg', message: 'Oh hey, thanks!' },
            { name: 'Jeffrey Hill', avatar: 'https://randomuser.me/api/portraits/men/54.jpg', message: 'How do I leave this chat room...?' },
            { name: 'Sara Smith', avatar: 'https://randomuser.me/api/portraits/women/29.jpg', message: 'Why would you want to leave? This website uses a dark theme everywhere!' }
        ];

        /*for (let i = 0; i < 5; i++) {
            images = images.concat(images);
        }*/

        return (
            <section className={classes.root}>
                <Paper className={classes.chatInputPaper} elevation={4}>
                    <div className={classes.chatInput}>

                        {images.map((item, index) => {
                            return (
                                <React.Fragment>
                                    <div key={index} className={classes.chatRoomMessage}>
                                        <Avatar alt='Remy Sharp' src={item.avatar} />
                                        <div className={classes.messageText}>
                                            {item.message}
                                        </div>
                                    </div>
                                    <Divider className={classes.divider} key={index} />
                                </React.Fragment>
                            );
                        })}

                    </div>
                </Paper>
                <Paper className={classes.composeInputPaper} elevation={4}>
                    <Input classes={{ root: classes.composeInput }} multiline={true} rows={1} rowsMax={2} fullWidth={true} disableUnderline={true} placeholder={"Enter a message..."}
                           endAdornment={
                                <IconButton>
                                    <SendIcon className={classes.searchIcon} />
                                </IconButton>
                           }
                    />
                </Paper>
            </section>
        );
    }

}

ChatText = withStyles(chatTextStyles)(ChatText);


/* -------------------------- */

const chatToolbarStyles = theme => ({
    chatToolbarRoot: {
        color: '#FFF',
        margin: '8px',
        minHeight: '32px',
        backgroundColor: /*'#0377ad',*/ /*'#0595DD',*/ 'rgba(26,26,34,0.8)',
        borderRadius: '2px'
    },
    innerContent: {
        width: '100%',
    },
    chatTitle: {
        margin: '0 auto'
    },
    searchWrapper: {
        backgroundColor: /*'#025279',*/'rgba(103,120,129,0.4)',
        borderRadius: '3px',
        border: 'solid 1px /*#025279*/rgba(103,120,129,0.4)',
        color: '#FFF',
        margin: '5px'
    },
    searchInput: {
        width: '180px',
        paddingLeft: '8px',
        transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&::placeholder': {
            color: '#FFF',
            opacity: 1
        },
        '&:focus': {
            width: '300px'
        }
    },
    searchIcon: {
        color: '#FFF',
        marginTop: '3px'
    }
});

class ChatToolbar extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <Toolbar disableGutters={true} className={classes.chatToolbarRoot}>
                <Typography variant='title' className={classes.chatTitle} color='secondary'>
                    <Box fontWeight='bold' letterSpacing={6}>WELCOME TO WHITEBOARD</Box>
                </Typography>
                <Input classes={{ root: classes.searchWrapper, input: classes.searchInput }} disableUnderline={true} placeholder={"Search"}
                       endAdornment={<SearchIcon className={classes.searchIcon} />}
                />
            </Toolbar>
        );
    }

}

ChatToolbar = withStyles(chatToolbarStyles)(ChatToolbar);


/* -------------------------- */


const styles = theme => ({
    root: {
        margin: '16px',
        height: 'calc(100vh - 64px)',
        //padding: '16px',

    },
    paper: {
        height: '80vh',
        width: '70vw',
        marginTop: '5%',

    },
    gridContainer: {
        height: 'inherit',
        backgroundColor: 'rgb(54,55,59)',
        paddingRight: '6px',
        paddingTop: '2px',
        paddingBottom: '2px',
        paddingLeft: '10px'
    },
    gridItem: {
        height: '100%',


    },
    '@global': {
        'body': {
            fontFamily: '"Roboto"'
        }
    }
});

class ChatRoom extends React.Component {

    render() {

        const { classes } = this.props;
        console.log(classes);

        return (
            <div className={classes.root}>
                <Paper className={classes.paper} elevation={2}>
                    <Grid container spacing={0} className={classes.gridContainer}>
                        <Hidden mdDown>
                            <Grid item md={2} className={classes.gridItem}>
                                <PeopleList />
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} md={10} className={classes.gridItem}>
                            <ChatToolbar />
                            <ChatText />
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        );
    }

}

export default withStyles(styles)(ChatRoom);