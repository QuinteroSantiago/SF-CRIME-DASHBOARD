import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Container from '@material-ui/core/Container';

export default function Navigation() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
      </Container>
    </React.Fragment>
  );
}
