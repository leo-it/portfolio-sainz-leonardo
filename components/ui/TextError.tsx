import React from 'react'
import { Typography } from "@mui/material";

function TextError (props) {
  return <Typography color="error" variant={'h6'} className='error'>{props.children}</Typography>
}

export default TextError
