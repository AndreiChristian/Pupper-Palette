import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from "./NoItem.module.css"


const NoItem = () => {
    const light = useSelector(state => state.light.light)
  return (
    <div className={classes.container} >
        {/* {light === "day" && <img src='/assets/images/majestic/goldenRetriever.png'/> } */}
        <div className={classes.content}>
            <div className={classes.text}> WELL WELL WELL, THERE ARE NO ITEMS IN YOUR CART...</div>
            <div className={classes.text}>HOW ABOUT THEESE?</div>
            <Link className={light === "day"? classes.link_day : classes.link_night} to={'/art'}>ART</Link>
        </div>
        {light && <img src='/assets/images/majestic/goldenRetriever.png'/> }
    </div>
  )
}

export default NoItem