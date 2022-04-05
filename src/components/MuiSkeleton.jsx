import React from 'react'
import {Stack, Skeleton} from '@mui/material'

function MuiSkeleton(props) {
  return (
      <Stack  spacing={1} width="250px" >
        <Skeleton variant="rectangular" animation="wave"  width={290} height={150}/>
        <Skeleton variant="text" animation="wave"  />
        <Skeleton variant="text"   />
      </Stack>

  )
}

export default MuiSkeleton

