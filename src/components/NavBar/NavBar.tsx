import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { primary } from '../../utils/colors'

const useStyles = makeStyles((theme) => ({  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
  },
}))

type INavBar = {
  title: string
}

const NavBar = (props: INavBar) => {
  const classes = useStyles()
  return(
    <AppBar position="static" style={{ background: primary }}>
      <Toolbar>        
        <Typography variant="h6" className={classes.title}>
          {props.title}
        </Typography>
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu">
          <MoreVertIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
