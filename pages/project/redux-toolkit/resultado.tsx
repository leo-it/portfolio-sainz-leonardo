import React from 'react'
import Typography from '@mui/material/Typography'
import { useAppSelector } from '@/redux/hooks';

const resultado = () => {
  const infletaSelector = useAppSelector((state) => state.infleta);
console.log(infletaSelector);

  return (
    <div>
          <Typography mt={5} variant="h4">
            {" "}
            Resultado: "{infletaSelector.precioConInteresFinal?.text}"
          </Typography>
          <Typography mt={5} variant="h4">
            precioConInteresFinal: {infletaSelector.precioConInteresFinal?.data}
          </Typography>{" "}
          <Typography mt={5} variant="h4">
            precioCuotas: {infletaSelector.precioCuotas}
          </Typography>
     
    
       

    </div>
  )
}

export default resultado