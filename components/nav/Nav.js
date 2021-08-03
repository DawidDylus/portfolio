import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fingerprint from '@material-ui/icons/Fingerprint';
import { Tabs, Tab, Container } from '@material-ui/core';


const Nav = () => {

    return <>
        <div >        
            <AppBar>
                <Toolbar style={{ justifyContent: "center" }} >
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Fingerprint />
                    </IconButton>
                    <Tabs indicatorColor="secondary">
                        <Tab href="#" label="Projects"></Tab>
                        <Tab href="#" label="Technologies"></Tab>
                        <Tab href="#" label="Contact"></Tab>
                    </Tabs>
                </Toolbar>
            </AppBar>           
        </div>
    </>

}

export default Nav;