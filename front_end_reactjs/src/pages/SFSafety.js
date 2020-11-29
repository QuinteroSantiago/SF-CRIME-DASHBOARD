//Need to Rename this page. 'CRIME By Area' OR SOMETHING SIMILAR

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
import DistrictRank from '../graphs/DistrictRank';
import DistrictComparison from '../graphs/DistrictComparison';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 801,
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

export default function SFSafety() {

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
          <StyledBreadcrumb component="a" href="/SFSafety" label="SF Crime Safety" onClick={handleClick} />
        </Breadcrumbs>
      </Grid>
      <Grid>
        <Paper variant="outlined" className={classes.root}>
          <h1 className={classes.card}>SF Crime Safety</h1>
          <Divider className={classes.divider} />
          <Typography paragraph variant="body2" color="textSecondary" className={classes.text}>
            This page shows trends of crimes in different districts of San Francisco over the years. It displays two graphs that show the most dangerous districts and an interactive graph that lets you choose the district you want to see.
            </Typography>
          <Grid container spacing={0}>
            <Grid item xs={6}><DistrictRank /></Grid></Grid>
          <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
            The graph above shows the 5 districts with the highest average monthly number of crimes.
          </Typography>
          <Grid container spacing={0}>
            <Grid item xs={6}><DistrictComparison /></Grid></Grid>
          <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
            The graph above lets the user choose three different districts and compare their daily average reported crimes.
            </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}