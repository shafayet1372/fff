import React from 'react'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'
const useStyles=makeStyles({
  main:{
    color:'white'
  },
  hola:{
    height:'200px',
    width:'100%',
    backgroundColor:'red'
  }
})
export default function index() {
  const classes=useStyles()
  return (
    <Box className={classes.hola} >

      <Typography className={classes.main}>sdsad</Typography>
    </Box>
  )
}
