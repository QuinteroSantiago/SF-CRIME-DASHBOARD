//I think we should rename this page. 'Best time to visit SF' OR SOMETHING SIMILAR


import React from 'react';
import '../../App.css';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import HomeIcon from '@material-ui/icons/Home';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import CrimeByDay from '../graphs/CrimeByDay';
import CrimeTimesRanked from '../graphs/CrimeTimesRanked';

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

export default function SFTourism() {

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
          <StyledBreadcrumb component="a" href="/SFTourism" label="SF Tourism" onClick={handleClick} />
        </Breadcrumbs>
      </Grid>
      <Grid>
        <Paper variant="outlined" className={classes.root}>
          <h1 className={classes.card}>SF Tourism</h1>
          <Divider className={classes.divider} />
          <Typography paragraph variant="body2" color="textSecondary" className={classes.text}>
            As shown in the graph, this page displays crime occurrences in San Francisco, ordered by the days of the week.
            The graph can be altered depending on the information a user wants to learn from it by adjusting the controls built into the graph panel.
            </Typography>
          <Grid container spacing={0}>
            <Grid item xs={6}><CrimeByDay /></Grid></Grid>
          <Grid container spacing={0}>
            <Grid item xs={6}><CrimeTimesRanked /></Grid></Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}