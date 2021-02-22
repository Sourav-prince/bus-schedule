import React, { useEffect } from 'react';
import { useImmer } from "use-immer";
import { useParams } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { getBusSchedule } from '../../services/Buses';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: '80px',
    justifyContent: 'center',
    display: 'flex'
  },
  table: {
    minWidth: 650,
    background: '#fff',
    borderRadius: '8px'
  },
  tableTitle: {
    width: '100%',
    textAlign: 'center',
    margin: '10px 0px',
    fontSize: '1.2em',
    fontWeight: 'bold'
  }
});

export default function BasicTable() {
  const classes = useStyles();

  const [state, setState] = useImmer({
    list:[] as any
  })

  const params:any = useParams();

  const loadItems = async()=>{
    try{
      let res:any
      res = await getBusSchedule(params.agencyName,params.busTag)
      setState(draft => {
        draft.list = res.route || [];
      });
    }catch(e){}
  }

  useEffect(()=>{
    loadItems()
    // eslint-disable-next-line
  },[])

  if(!state.list.length){
    return(
      <Container maxWidth={false} className={classes.root}>
        <CircularProgress disableShrink />
      </Container>
    ) 
  }

  return (
    <Container maxWidth={false} className={classes.root}>
      <TableContainer>
        <div className={classes.tableTitle}>
          { state.list.length &&
            `${state.list[0].title}, Direction: ${state.list[0].direction}, 
            Working Days: ${state.list[0].serviceClass}`
          }
        </div>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {state.list.length && state.list[0].header.stop.map((val:any, index: number)=>(
                <TableCell key={index}>{val.content}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {state.list.length && state.list[0].tr.map((val:any, index: number)=>(
              <TableRow key={index}>
                {val.stop.map((info:any,index:number)=>{
                  if(info.content !== '--'){
                    return <TableCell key={index} align="center">{info.content}</TableCell>
                  }   
                  return false
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
