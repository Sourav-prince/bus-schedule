import React, { useEffect } from 'react';
import { useImmer } from "use-immer";
import { useLocation } from "react-router-dom";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);


const Header = (props:any) => {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = useImmer({
    title: ''
  })
  
  const setTitle = (val:string) => {
    setState(draft => {
      draft.title = val;
    });
  }

  useEffect(()=>{
    const path = location.pathname.split('/');
    if(path.length === 3){
      setTitle('Bus Timetable')
    }else{
      if(location.pathname === '/'){
        setTitle('Select Agency')
      }else{
        setTitle('Select Bus Route')
      }
    }
    // eslint-disable-next-line
  },[location])

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {state.title}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header
