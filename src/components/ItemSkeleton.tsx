import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Variants() {
  return (
    <div style={{height: '270px', maxWidth: '100%', borderRadius: '10px'}}>
      <Skeleton variant="rect" style={{borderRadius: '10px'}} width={'100%'} height={'100%'} />
    </div>
    
  );
}