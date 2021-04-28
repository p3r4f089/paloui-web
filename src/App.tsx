import { useState } from 'react'
import './App.scss'

import Grid from '@material-ui/core/Grid'

import NavBar from './components/NavBar/NavBar'
import Form from './components/Form/Form'

function App() {

  const [luckyNumber, setLuckyNumber] = useState<string>('')

  return (
    <div className="App">
      <NavBar title={`TestPaloIt`}/>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >

        <Form 
          onNumber={(value: string) => setLuckyNumber(value)}/>
        <p className="lucky-number">Número de la suerte: {luckyNumber}</p>
      </Grid>
    </div>
  )
}

export default App
