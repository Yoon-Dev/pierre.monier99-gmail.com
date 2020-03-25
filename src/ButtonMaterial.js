import React from "react";
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, withStyles  } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
const ButtonMaterial = props => {

    const theme = createMuiTheme({
       typography: {
           fontSize: 15
       },
       palette: {
           primary: blue,
           secondary: red
       },

    })


    return(
        <MuiThemeProvider theme={theme}>
            <div>
                <Button className={props.classes.myLeftButton} variant="contained">Hello</Button>
                <Button color="secondary" variant="contained">World</Button>
            </div>
        </MuiThemeProvider>

    )
}

const styles = {
    myLeftButton: {
        backgroundColor: blue[400]
    }
}

export default withStyles(styles)(ButtonMaterial);