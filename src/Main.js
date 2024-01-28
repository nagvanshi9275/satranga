import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Main = () => {
  return (
    <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2}>
        <Grid item xs={8} md={8} lg={8}>
          <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'blue' }}>
            Item 10
          </Paper>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'green' }}>
            Item 20
          </Paper>
        </Grid>
        <Grid item xs={8} md={8} lg={8}>
          <Paper style={{ padding: 16, textAlign: 'center', color: 'white', background: 'orange' }}>
            Item 30
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Main;
