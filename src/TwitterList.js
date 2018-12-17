import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        padding: '10px',
    },
});

class TwitterList extends Component {
    constructor(props) {
        super(props);
        this.state = {tweets: []}
    }

    componentWillMount() {
        const tweetEndpoint = (process.env.BACKEND_URL) ? process.env.BACKEND_URL + ':' + process.env.PORT + '/twitter'
            : 'http://lp-tw-backend-challenge.herokuapp.com/twitter';
        // :'http://localhost:3333/twitter';
        axios.get(tweetEndpoint)
            .then((response) => {
                console.log(response);
                this.setState({tweets: response.data})
            })
            .catch((log) => {
                console.log(log)
            })
    }


    render() {
        const {classes} = this.props;
        const {tweets} = this.state;
        const list = tweets.map((item) => {
                return <Grid item xs={4} lg={4}>
                    <Paper className={classes.root} elevation={1} xs={6} alignItems={'center'} style={{margin: '20px'}}>
                    <Typography variant="h5" component="h3">
                        {item.user.user_name}
                    </Typography>
                    <Typography component="p">
                        {item.tweet}
                    </Typography>
                    <Typography component="caption" style={{fontSize: '10px', color: '#ccc'}}>
                        {item.created_at}
                    </Typography>
                </Paper>
                </Grid>
            });
        return <React.Fragment>
            <Grid container spacing={24}>
                {list}
            </Grid>
        </React.Fragment>

    }
}

export default withStyles(styles)(TwitterList);
