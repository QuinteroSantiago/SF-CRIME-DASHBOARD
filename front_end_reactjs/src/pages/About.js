import React from 'react';
import '../App.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CrimeMap from '../graphs/CrimeMap';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1202,
    },
    pagecontainer: {
        paddingBottom: 20,
    },
    media: {
        maxWidth: 792,
        height: 593,
    },
    container: {
        maxHeight: 440,
    },
    card: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 35,
        fontSize: 40,
    },
    text: {
        paddingTop: 10,
        paddingLeft: 35,
        paddingRight: 35,
    },
    subtitle: {
        paddingTop: 37,
        paddingBottom: 20,
    },
    breadcrumbs: {
        paddingTop: 20,
        paddingBottom: 20,
    }
}));

const StyledBreadcrumb = withStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        color: theme.palette.grey[800],
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: theme.palette.grey[300],
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(theme.palette.grey[300], 0.12),
        },
    },
}))(Chip);

function handleClick(event) {
    event.preventDefault();
}

export default function About() {

    const classes = useStyles();

    return (
        <Grid
            className={classes.pagecontainer}
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <Grid>
                <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs} >
                    <StyledBreadcrumb
                        component="a"
                        href="/"
                        label="Home"
                        icon={<HomeIcon fontSize="small" />}
                        onClick={handleClick}
                    />
                    <StyledBreadcrumb component="a" href="/About" label="About" onClick={handleClick} />
                </Breadcrumbs>
            </Grid>
            <Grid>
                <Paper variant="outlined" className={classes.root}>
                    <h1 className={classes.card}>About</h1>
                    <Divider className={classes.divider} />
                    <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
                        San Francisco is considered the cultural, commercial, and financial center of Nothern California. It is the 16th most
                        populous city in the US and the second most densely populated large U.S. city. It is also home to an area called Silicon
                        Valley, the world's center for innovative technology companies with a GDP of $548 billion as of 2018. However, compared
                        to the rest of the US, it is not a safe city, considered
                        <a href="https://www.neighborhoodscout.com/ca/san-francisco/crime#:~:text=For%20San%20Francisco%2C%20we%20found,assault%20with%20a%20deadly%20weapon."> more dangerous than 98% of U.S. Cities. </a>
                        This website's goal is to provide a guide to San Francisco tourists and future residents an overview crime in the city
                        and the help visualize its changes through the years.
                    </Typography>
                    <CrimeMap />
                    <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
                        This Crime Map above shows the most recent 300 crimes in the San Francisco area.
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
}