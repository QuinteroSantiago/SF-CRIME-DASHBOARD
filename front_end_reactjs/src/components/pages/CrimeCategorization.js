//Need to Rename this page. 'CRIME OVER TIME' OR SOMETHING SIMILAR

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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
/* import TablePagination from '@material-ui/core/TablePagination'; */
import TableRow from '@material-ui/core/TableRow';
import CrimeComparison from '../graphs/CrimeComparison';
import AverageCrimeTrend from '../graphs/AverageCrimeTrend';

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
  tablestyle: {
    width: '100%',
  },
  tablecontainer: {
    maxHeight: 440,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 35,
    paddingRight: 35,
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

const columns = [
  { id: 'type', label: 'Type of Crime', minWidth: 170 },
  { id: 'description', label: 'Description', minWidth: 100 },
];

function createData(type, description) {
  return { type, description };
}

const rows = [
  createData('Arson', 'Any willful or malicious burning or attempt to burn, with or without intent to defraud, a dwelling house, public building, motor vehicle or aircraft, personal property of another, etc.'),
  createData('Assault', 'An unlawful attack by one person upon another for the purpose of inflicting severe or aggravated bodily injury. This type of assault usually is accompanied by the use of a weapon or by means likely to produce death or great bodily harm.'),
  createData('Bribery', 'Refers to the offering, giving, soliciting, or receiving of any item of value as a means of influencing the actions of an individual holding a public or legal duty.'),
  createData('Burglary', 'Burglary, also called breaking and entering and sometimes housebreaking, is illegally entering a building or other areas to commit a crime. Usually that offence is theft, but most jurisdictions include others within the ambit of burglary.'),
  createData('Disorderly Conduct', 'A person commits disorderly conduct when, with intent to cause public alarm, nuisance, jeopardy or violence, or knowingly or recklessly creating a risk.'),
  createData('Drug Narcotic', 'Any substance produced directly or inderectly by extraction from substances of vegetable origin, or independently by means of chemical synthesis, or by a combination of both classified as a narcotic.'),
  createData('Drug Offense', 'A drug offense refers to the possession, use, sale or furnishing of any drug or intoxicating substance or drug paraphernalia, that is prohibited by law.'),
  createData('Drunkenness', 'Misdemeanor crime that a person is visibly drunk or under the influence of drugs in public.'),
  createData('Embezzlement', 'Fraudulent appropriation of property by a person to whom such property has been entrusted, or into whose hands it has lawfully come. '),
  createData('Family Offense', 'Crime committed against a relative or other person whom the perpetrator has an “intimate relationship” with.'),
  createData('Family Offenses', 'Multiple instances of family offense'),
  createData('Forgery Counterfeiting', 'Altering, copying, or imitating of something, without authority or right, with the intent to deceive or defraud by passing the copy or thing altered or imitated as that which is original or genuine; or the selling, buying, or possession of an altered, copied, or imitated thing with the intent to deceive or defraud.'),
  createData('Fraud', 'Deliberate misrepresentation of fact for the purpose of depriving someone of a valuable possession. '),
  createData('Gambling', 'Accepting, recording, or registering bets, or carrying on a policy game or any other lottery, or playing any game of chance, for money or other thing of value.'),
  createData('Homicide', 'When one human being causes the death of another. '),
  createData('Human Trafficking(A), Commercial Sex Acts', 'Recruitment, harboring, transportation, provision, or obtaining of a person for the purpose of a commercial sex act. Commercial sex act means any sex act on account of which anything of value is given to or received by any person.'),
  createData('Human Trafficking(B), Involuntary Servitude', 'Using force, the threat of force, or the threat of legal coercion to compel a person to work against his/her will. In addition, the victim\'s involuntary servitude must be tied to the payment of a debt.'),
  createData('Kidnapping', 'Crime at common law consisting of an unlawful restraint of a person\'s liberty by force or show of force so as to send the victim into another country. Under modern law, this crime will usually be found where the victim is taken to another location or concealed.'),
  createData('Larceny Theft', 'Unlawful taking, carrying, leading, or riding away of property from the possession or constructive possession of another.'),
  createData('Liquor Laws', 'Sale and consumption of alcoholic beverages.'),
  createData('Loitering', 'Lingering in a public area without a purpose.'),
  createData('Missing Person', 'Anyone reported to police or by police as someone whose whereabouts are unknown, whatever the circumstances of their disappearance, and they are considered missing until located. A missing person under the age of 18 is classified as a missing child.'),
  createData('Nocat', 'No category'),
  createData('Non-Criminal', 'Not relating to, involving, or being a crime a noncriminal civil offense'),
  createData('Offences Against The Family and Children', 'Unlawful nonviolent acts by a family member (or legal guardian) which threaten the physical, mental, or economic well-being or morals of another family member and which are not classifiable as other offenses, such as Assault or Sex Offenses.'),
  createData('Other', 'Other'),
  createData('Other Miscellaneous', 'Other Miscellaneous'),
  createData('Other Offenses', 'Other Offenses'),
  createData('Pornography Obsene Mat', 'Material is considered “obscene” if: It shows or describes sexual conduct in an obviously offensive way.'),
  createData('Prostitution', 'Exchange of a sexual act for money.'),
  createData('Robbery', 'Unlawful taking of property from the person of another through the use of threat or force.'),
  createData('Secondary Codes', 'Means any code which is incorporated by reference, directly or indirectly, in whole or in part, in any primary code or in any secondary code.'),
  createData('Sex Offense', 'rape, sexual assault, marital rape, incest, pornography, exploitation, molestation, abduction, indecent exposure, sodomy, bestiality, and prostitution'),
  createData('Sex Offense, Forcible', 'Forcible is defined as any sexual act directed against another person, forcibly and/or against that person\'s will'),
  createData('Sex Offense, Non-Forcible', 'Not forcibly or against the person\'s will where the victim is incapable of giving consent.'),
  createData('Stolen Property', 'A crime that a person is guilty of when the person receives stolen property that is known to be stolen and the person has the intent to permanently deprive the owner of the property.'),
  createData('Suicide', 'Intentional killing of oneself.'),
  createData('Suspicious Occ', 'Tool provided under the Bank Secrecy Act (BSA) of 1970 for monitoring suspicious activities that would not ordinarily be flagged under other reports (such as the currency transaction report).'),
  createData('Traffic collision', 'Occurs when a vehicle collides with another vehicle, pedestrian, animal, road debris, or other stationary obstruction, such as a tree, pole or building.'),
  createData('Traffic Violation Arrest', 'Occurs when a person is taken into police custody in connection with some type of traffic violation. This often happens after a traffic stop, when a person is pulled over in their vehicle by the police due to some violation.'),
  createData('Trea', 'Trespassing or loitering near posted industrial property'),
  createData('Trespass', 'Involves being on someone else\'s property without permission.'),
  createData('Vandalism', 'Action involving deliberate destruction of or damage to public or private property.'),
  createData('Vehicle Impounded', 'Legal process of placing a vehicle into an impoundment lot or tow yard.'),
  createData('Vehicle Misplaced', 'Misplaced or stolen vehicle'),
  createData('Vehicle Theft', 'Defined as the theft or attempted theft of a motor vehicle. '),
  createData('Warrants', 'Warrant granted by a judge in a court of law to a law enforcement official granting that law enforcement official the right and ability to arrest a person of interest regarding a crime.'),
  createData('Weapon Laws', 'Comprehensive term for all instruments of offensive or defensive combat, including items used in injuring a person.'),
  createData('Weapons Carrying Etc', 'Concealed carry, or carrying a concealed weapon (CCW), is the practice of carrying a weapon (such as a handgun) in public in a concealed manner, either on one\'s person or in close proximity.'),
  createData('Weapons Offence', 'Violations of statutes or regulations that control deadly weapons.'),
];

function handleClick(event) {
  event.preventDefault();
}

export default function CrimeCategorization() {

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  /* const handleChangePage = (event, newPage) => {
      setPage(newPage);
  }; */

  /*  const handleChangeRowsPerPage = (event) => {
       setRowsPerPage(+event.target.value);
       setPage(0);
   }; */

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
          <StyledBreadcrumb component="a" href="CrimeCategorization" label="Crime Categorization" onClick={handleClick} />
        </Breadcrumbs>
      </Grid>
      <Grid>
        <Paper variant="outlined" className={classes.root}>
          <Grid container spacing={0}>
            <Grid item xs={6}><h1 className={classes.card}>Crime Categorization</h1></Grid>
            {/* <Grid item xs={6} className = {classes.subtitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Grid> */}
          </Grid>
          <Divider className={classes.divider} />
          <Typography paragraph variant="body2" color="textSecondary" className={classes.text}>
            This page shows trends in San Francisco's crime rate in certain areas over time. It displays two graphs that show the monthly crime rate and different crime categories trends over time.
            </Typography>
          <Grid container spacing={0}>
            <Grid item xs={6}><AverageCrimeTrend /></Grid></Grid>
          <Paper className={classes.tablestyle}>
            <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
              The graph above displays average monthly crime rate over time.
              The graph can be altered to include specific crimes, specific weekdays, specific districts, as well as a specific time period.
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={6}><CrimeComparison /></Grid></Grid>
            <Typography paragraph variant="body1" color="textSecondary" className={classes.text}>
              The graph above displays the types of crimes shown as a trend over time.
              The graph can be altered depending on the information a user wants to learn from it by adjusting the controls built into the graph panel.
              The table below gives descriptions for each type of crime in the database.
            </Typography>
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
                  })}``
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    /> */}
          </Paper>
        </Paper>
      </Grid>
    </Grid>
  );
}