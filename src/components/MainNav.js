
import BottomNavigation from '@material-ui/core/BottomNavigation';
import {BottomNavigationAction,Box} from '@material-ui/core';

import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import TvIcon from '@material-ui/icons/Tv';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import {useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "white",
        zIndex: 100,
        boxShadow: "0px 1px 10px black"

    }
})
export default function LabelBottomNavigation() {
    const [value, setValue] = useState(0);
    const history = useHistory()
    const classes = useStyles()

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    useEffect(() => {
        if (value === 0) {
            history.push('/')
        } else if (value === 1) {
            history.push('/movies')
        } else if (value === 2) {
            history.push('/tv')
        } else if (value === 3) {
            history.push('/search')
        }
    }, [value])

    return (
     
      <BottomNavigation
        showLabels
        value={value}
        className={classes.root}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction label="Tv Shows" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
   
    );
}
