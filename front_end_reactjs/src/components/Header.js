import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Logo from '../images/sflogo.png';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingTop: 10,
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#553D67',
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    backgroundColor: '#99738E',
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  links: {
    border: 0,
    color: 'white',
    height: 30,
    padding: '0 20px',
    boxShadow: '0 3px 5px 2px #99738E',
    backgroundColor: '#99738E',
    borderRadius: 35,
    '&:hover': {
      backgroundColor: '#F64C72',
      color: '#FFF'
    }
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link
          style={{ textDecoration: 'none' }}
          href={'/'}>
          <img src={Logo} className="navbar-logo" alt="nlogo" />
        </Link>
      </Toolbar>
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary} position="fixed">

        <Link
          style={{ textDecoration: 'none' }}
          href={'CrimeCategorization'}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          <Button variant="contained" className={classes.links}>
            Crime Categorization
            </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href={'SFSafety'}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          <Button variant="contained" className={classes.links}>
            SF Crime Safety
            </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href={'SFCrimeResolution'}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          <Button variant="contained" className={classes.links}>
            SF Crime Resolution
          </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href={'SFTourism'}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          <Button variant="contained" className={classes.links}>
            SF Tourism
            </Button>
        </Link>
        <Link
          style={{ textDecoration: 'none' }}
          href={'About'}
          color="inherit"
          noWrap
          variant="body2"
          className={classes.toolbarLink}
        >
          <Button variant="contained" className={classes.links}>
            About
            </Button>
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}