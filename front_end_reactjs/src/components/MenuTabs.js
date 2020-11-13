import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom' ;
import './Navbar.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function MenuTabs(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
    // eslint-disable-next-line
      role="menutabs"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

MenuTabs.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    border: 1,
    position: "fixed",
    textColor: 'white',
    textAlign: 'center',
    background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(74,74,122,1) 47%, rgba(0,38,46,1) 100%)",
  },
  indicator: {
    top: 0,
    padding: (0, 0, 0, 2),
    background: "white"
  },
  tabs: {
    textDecoration: 'none',
    color: 'white',
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <AppBar
      className={classes.root} 
      position="static">
        <Tabs
        elevation={0}
          classes={{
            indicator: classes.indicator,
            tabs: classes.tabs
          }}
          style={{height: "32px"}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab className={classes.tabs} label="Crime Categorization" {...a11yProps(0)} component={Link} to={"/CrimeCategorization"} />
          <Tab label="SF Safety" {...a11yProps(1)} component={Link} to={"/"}/>
          <Tab label="SF Tourism" {...a11yProps(2)} />
          <Tab label="SF Law Enforcement" {...a11yProps(3)} />
          <Tab label="SF Crime Resolution" {...a11yProps(4)} />
        </Tabs>
      </AppBar>
  );
}
