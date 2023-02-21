import { FC, ReactNode } from "react";

import { Typography } from "@mui/material";

interface Props {
 
  children: ReactNode;
}
const TextError: FC<Props> =({children})=> {
  return <Typography color="error" variant={'h6'} className='error'>{children}</Typography>
}

export default TextError
