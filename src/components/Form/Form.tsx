import { useState, useEffect } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { makeStyles } from '@material-ui/core/styles'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { calculateLuckyNumber } from '../../utils/lucky-number'

type IFormType = {
  onNumber: (value: string) => void
}

type IForm = {
  number: string,
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',    
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },    
  },  
  button:{
    marginTop: theme.spacing(20),
    marginBottom: theme.spacing(15)
  }
}));

const initialValues: IForm = {
  number: '',   
}

const LuckySchema = Yup.object().shape({
  number: Yup.string()
    .min(14, 'El número debe contener mínimo 14 caracteres')
    .max(16, 'El número debe contener máximo 16 caracteres')
    .required('Requerido'),  
})

const Form = (props: IFormType) => {

  const classes = useStyles()

  const [luckyNumber, setLuckyNumber] = useState<string>('')

  useEffect(() => {
    if(luckyNumber){
      props.onNumber(luckyNumber)
    }
  }, [luckyNumber])


  const formik = useFormik({
    initialValues,
    validationSchema: LuckySchema,
    onSubmit: (data: IForm) => {      
      const number = calculateLuckyNumber(data.number)
      setLuckyNumber(number)
    }
  })

  return(
    <form className={classes.root} autoComplete="off" onSubmit={formik.handleSubmit}>
      <TextField         
        id="number" 
        label="Lucky Number"
        value={formik.values.number}
        onChange={formik.handleChange}
        error={formik.touched.number && Boolean(formik.errors.number)}
        helperText={formik.touched.number && formik.errors.number}  />     

      <Button 
        className={classes.button}
        type="submit"
        variant="contained">
          Calcular Número de la suerte
      </Button> 
    </form>
  )
}


export default Form