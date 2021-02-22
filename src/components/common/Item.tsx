import React from 'react';
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import AgencyLogo from '../../assets/images/agency.jpg'

const useStyles = makeStyles({
  root: {
    width: '100%',
    borderRadius: '10px'
  },
  media: {
    height: 140,
  },
  price: {
    textAlign: 'center',
    width: '100%'
  },
});

const Agency = (props:any) => {
  const classes = useStyles()
  const { data } = props
  const location = useLocation();
  const history = useHistory();


  const handleClick = ()=> {
    history.push(`/${data.tag}`);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={AgencyLogo}
          title={data.title}
        />
        <CardContent>
          <Typography 
            className={classes.price} 
            gutterBottom 
            variant="subtitle1" 
            component="div">
            {data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Typography 
          className={classes.price} 
          color="primary" 
          variant="subtitle1" 
          component="div">
          {data.regionTitle || data.tag}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default Agency
