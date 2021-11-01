import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardItem from '../../CardItem'
import NowPlaying from './NowPlaying'
import TopRated from './TopRated'
import Upcoming from './Upcoming'
export default function Movies() {
    const [state,setState] = useState([])

useEffect(async()=>{
const url = `
https://api.themoviedb.org/3/discover/movie?api_key=76414d31763a9749df4b97bce21c6c80&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
const fecthData = await axios.get(url)
const result = await fecthData

setState(result.data.results)

},[])
// console.log(state);
    return (
        <div>
             <span className="pageTitle" >Discover Movies</span>
        <div className="trending">
     
         {
             state&& state.slice(0,10).map((item,i)=>{
                 return(<>
                 
                  <CardItem
                  key={item.id}
                  id={item.id}
                  title={item.name||item.title}
                  type={item.media_type}
                  path={item.poster_path}
                  date={item.release_date||item.first_air_date}
                  vote={item.vote_average}
                  
                  />
                     
                     </>
                 )
             })
         }
         
        </div>
        
        <TopRated/>
        <NowPlaying/>
        </div>
    )
}

// 24*3150
// 3800*24
// 30*2800 = 26000
