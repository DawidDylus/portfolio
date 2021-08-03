import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fingerprint from '@material-ui/icons/Fingerprint';

const Nav = () => {

    return <>
        <div >
            <AppBar>
                <Toolbar style={{ justifyContent: "center" }} >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Fingerprint style={{fontSize: "2.5rem"}} />
                    </IconButton>
                    <Button color="inherit">
                        Projects
                    </Button>
                    <Button color="inherit">
                        Technologies
                    </Button>
                    <Button color="inherit">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    </>

}

export default Nav;