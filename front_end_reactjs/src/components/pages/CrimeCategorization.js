import React from 'react';
import '../../App.css';
import './Pages.css';
import one from './1.png';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

/* import CrimeComparison from '../CrimeComparison';
import AverageCrimeTrend from '../AverageCrimeTrend'; */

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 900,
    },
    media: {
        maxWidth: 792,
        height: 593,
    },
      container: {
        maxHeight: 440,
      },
      tablestyle: {
        width: '100%',
      },
      tablecontainer: {
        maxHeight: 440,
      },
      card: {
          paddingTop: 40,
          paddingBottom: 40,
          paddingLeft: 30,
          fontSize: 40,
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

const columns = [
    { id: 'type', label: 'Type of Crime', minWidth: 170 },
    { id: 'description', label: 'Description', minWidth: 100 },
  ];

  function createData(type, description) {
    return { type, description };
  }
  
  const rows = [
    createData('Burglary','Burglary, also called breaking and entering and sometimes housebreaking, is illegally entering a building or other areas to commit a crime. Usually that offence is theft, but most jurisdictions include others within the ambit of burglary.'),
  ];

  function handleClick(event) {
    event.preventDefault();
  }

export default function CrimeCategorization() {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return (
        <Grid
            className = "PageContainer"
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid>
            <Breadcrumbs aria-label="breadcrumb" style={{ paddingBottom: 20 }} >
            <StyledBreadcrumb
                component="a"
                href="/"
                label="Home"
                icon={<HomeIcon fontSize="small" />}
                onClick={handleClick}
            />
            <StyledBreadcrumb component="a" href="CrimeCategorization" label="Crime Categorization" onClick={handleClick} />
            </Breadcrumbs>
            </Grid>
            
            <Grid>
            <Card className = {classes.root}>
            <CardHeader title="Crime Categorization" className = {classes.card} style={{ fontWeight: 'bold' }}/>
            <CardMedia
                className={classes.media}
                image={one}
                /*{<CrimeComparison />
                <AverageCrimeTrend />*/
            />
            <CardContent>
            <Typography paragraph variant="body2" color="textSecondary">
                As seen above, this page displays the types of crimes shown as a trend over time. 
                The graph can be altered depending on the information a user wants to learn from it by adjusting the controls built into the graph panel above.
            </Typography>
            <Paper className={classes.tablestyle}>
      <TableContainer className={classes.tablecontainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </CardContent>
    </Card>
    </Grid>
    </Grid>
    );
}