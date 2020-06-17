import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(500),
      height: theme.spacing(50),
      
    },
  },
}));



export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <Paper elevation={3}  >
      

          </Paper>
    </div>
  );
}
