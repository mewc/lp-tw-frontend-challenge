import React, {Component} from 'react';
import './App.css';
import TwitterList from "./TwitterList";
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from "axios";
import Tooltip from '@material-ui/core/Tooltip';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            endpoint: '/',
            tweets: [],
            local: true
        }
    }

    componentWillMount() {
        this.getTweets();
    }

    changeLocal() {

        this.setState({
            ...this.state,
            local: !this.state.local
        }, () => {
            this.getTweets();
        })
    }

    changeEndpoint(value) {

        this.setState({
            ...this.state,
            endpoint: value
        }, () => {
            this.getTweets();
        })
    }

    getTweets() {

        const tweetEndpoint = (this.state.local) ?
            'http://localhost:3333/twitter' + this.state.endpoint
            : 'https://lp-tw-backend-challenge.herokuapp.com/twitter' + this.state.endpoint;
        axios.get(tweetEndpoint)
            .then((response) => {
                console.log(response);
                this.setState({
                    tweets: response.data,
                })
            })
            .catch((log) => {
                console.log(log)
            })
    }


    render() {
        const {classes} = this.props;
        const {local, tweets} = this.state;

        return (
            <div className="App">
                <div className={classes.root}>
                    <AppBar position="static">
                        <Toolbar>
                            <Button color="inherit"><a href={'https://mewc.info'}
                                                       style={{color: '#fff'}}>mewc</a></Button>
                            <Typography variant="h6" color="inherit" className={classes.grow}>
                                LIVEPERSON TWITTER CHALLENGE APP
                            </Typography>
                            {(local) ?
                                <Button color="inherit" onClick={() => {
                                    this.changeEndpoint('/db')
                                }}>db</Button>
                             : <Tooltip title="Disabled - heroku doesn't persist sqlite files">
                                <Button color="inherit" style={{color: 'lightBlue', textDecoration: 'underline'}}
                                        onClick={() => {this.changeEndpoint('/db')}}>db</Button>
                            </Tooltip>
                            }
                            <Button color="inherit" onClick={() => {
                                this.changeEndpoint('/')
                            }}>api</Button>
                            <Button variant={"outlined"} color="inherit" onClick={() => {
                                this.changeLocal()
                            }}>db: {(local) ? 'local' : 'hosted'}</Button>
                        </Toolbar>
                    </AppBar>
                </div>
                <TwitterList tweets={tweets}/>
            </div>
        );
    }
}

export default withStyles(styles)(App);
