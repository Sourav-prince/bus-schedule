import React, { useEffect, useMemo } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { useImmer } from "use-immer"

import Item from './Agency'
import ItemSkeleton from './ItemSkeleton'

import { getAgencyList } from '../services/Buses'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: '80px',
    },
    listContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
  }),
);


const List = (props:any) => {

  const classes = useStyles();

  const [state, setState] = useImmer({
    list:[]
  })

  const loadItems = async()=>{
    try{
      const res = await getAgencyList()
      setState(draft => {
        draft.list = res.agency;
      });
    }catch(e){}
  }

  useEffect(()=>{
    loadItems()
    // eslint-disable-next-line
  },[])

  const listLoader = useMemo(()=>(
    <>
      <Grid item xs={12} sm={6} md={3}>
        <ItemSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ItemSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ItemSkeleton />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <ItemSkeleton />
      </Grid>
    </>
  ),[])

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Grid container spacing={3} className={classes.listContainer}>
          {!state.list.length &&
            listLoader
          }
          {state.list.map((value:any,index:number)=>(
            <Grid key={index} item xs={12} sm={6} md={3}>
              <Item key={index} data={value} {...props}/>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  )
}

export default List
