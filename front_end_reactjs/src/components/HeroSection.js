import React from 'react';
import '../App.css'
import {Button} from './Button';
/* import { makeStyles } from '@material-ui/core/styles'; */
import './HeroSection.css';
import sfbg from '../images/sfbg.png';

/* const useStyles = makeStyles((theme) => ({
    shadowing: {
textShadowColor: 'rgba(0, 0, 0, 0.75)',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 10
    },
})); */

function HeroSection() {

    /* const classes = useStyles(); */
    return (
        <div className='hero-container' styles={{ backgroundImage:`url(${sfbg})` }}>
            <h1>The San Francisco Crime Dashboard</h1>
            <p>Designed to Help Keep Your Neighborhood Safe</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large'>
                    GET STARTED
                </Button> 
                <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>
                    All Records <i className='far-fa-play-circle'/>
                </Button>
            </div>
        </div>
    );
}

export default HeroSection
