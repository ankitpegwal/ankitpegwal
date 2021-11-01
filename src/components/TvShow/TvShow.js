import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardItem from '../../CardItem'

export default function TvShow() {
    const [state,setState] = useState([])

useEffect(async()=>{
const url = `https://api.themoviedb.org/3/discover/tv?api_key=76414d31763a9749df4b97bce21c6c80&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
const fecthData = await axios.get(url)
const result = await fecthData

setState(result.data.results)

},[])
console.log(state);
    return (
        <div>
             <span className="pageTitle" >Discover tv show</span>
        <div className="trending">
     
         {
             state&& state.map((item,i)=>{
                 return(<>
                 
                  <CardItem
                  key={i}
                  id={item.id}
                  title={item.name||item.title}
                  type="tv"
                  path={item.poster_path}
                  date={item.release_date||item.first_air_date}
                  vote={item.vote_average}
                  
                  />
                     
                     </>
                 )
             })
         }
         
        </div>
        
        </div>
    )
}

// 24*3150
// 3800*24
// 30*2800 = 26000
