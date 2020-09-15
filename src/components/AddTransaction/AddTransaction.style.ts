import {createMuiTheme, ThemeProvider, makeStyles} from "@material-ui/core/styles"
import { purple } from '@material-ui/core/colors'

export const theme = createMuiTheme({
    palette: {
      primary: purple,
    },
});

export const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(0.3),
        marginBottom:15,
        width: '100%'
      },
    },
  }));
