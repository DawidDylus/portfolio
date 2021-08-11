import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fingerprint from '@material-ui/icons/Fingerprint';
import { Tabs, Tab, Typography } from '@material-ui/core';


const Nav = () => {

    return <>
        <div >
            <AppBar>
                <Toolbar style={{ justifyContent: "center" }} >
                    <IconButton href="#" edge="start" color="inherit" aria-label="menu">
                        <Fingerprint />
                        <Typography>Portfolio</Typography>
                    </IconButton>
                    <Tabs indicatorColor="secondary">

                        <Tab href="#projects" label="Projects" />

                        <Tab href="#" label="Technologies" />
                        <Tab href="#" label="Contact" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    </>

}

export default Nav;