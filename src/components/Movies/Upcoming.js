import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardItem from '../../CardItem'

export default function Upcoming() {
    const [state,setState] = useState([])

useEffect(async()=>{
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=76414d31763a9749df4b97bce21c6c80&language=en-US`
const fecthData = await axios.get(url)
const result = await fecthData

setState(result.data.results)

},[])
// console.log(state);
    return (
        <div>
             <span className="pageTitle" >Upcoming Movies</span>
        <div className="trending">
     
         {
             state&& state.map((item,i)=>{
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
        
        </div>
    )
}

// 24*3150
// 3800*24
// 30*2800 = 26000
