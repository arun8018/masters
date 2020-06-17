import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import ImgUrl from '../assets/Food.jpg'

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
});

export default function MediaCardComponent() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // image={ImgUrl}
          image={'https://i.ibb.co/dJcvqK2/Solid-state.png'}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Solid State
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Solid state of matter possesses fixed mass, volume, shape and rigidity.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       <Button variant="contained" color="primary" size="small">
       <a style={{color:"white"}} href={'https://pdfhost.io/v/Uwxon0v7h_Solid_Statepdf.pdf'}>Download</a>
       </Button>
      </CardActions>
    </Card>
  );
}
