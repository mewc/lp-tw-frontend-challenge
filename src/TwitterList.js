import React, {Component} from 'react';
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

    render() {
        const {classes, tweets} = this.props;
        const list = tweets.map((item) => {
                return <Grid item xs={4} lg={4} key={item.tweet_id}>
                    <Paper className={classes.root} elevation={1} xs={6} alignItems={'center'} style={{margin: '20px'}}>
                    <Typography variant="h5">
                        {item.user_name}
                    </Typography>
                    <Typography component="p">
                        {item.tweet}
                    </Typography>
                    <Typography variant="overline" gutterBottom style={{fontSize: '10px', color: '#ccc'}}>
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
