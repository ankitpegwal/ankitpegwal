import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardItem from '../../CardItem'
import './style.css'
export default function Trending() {
const [state,setState] = useState([])

useEffect(async()=>{
const url = `https://api.themoviedb.org/3/trending/all/day?api_key=76414d31763a9749df4b97bce21c6c80`
const fecthData = await axios.get(url)
const result = await fecthData

setState(result.data.results)

},[])


    return (
        <>    <span className="pageTitle" >Trending</span>
        <div className="trending">
     
         {
             state&& state.map((item,i)=>{
                 return(<>
                 <div key={item.id}>
                 <CardItem
                  key={i}
                  id={item.id}
                  title={item.name||item.title}
                  type={item.media_type}
                  path={item.poster_path}
                  date={item.release_date||item.first_air_date}
                  vote={item.vote_average}
                  
                  />
                 </div>
                  
                     
                     </>
                 )
             })
         }
         
        </div>
        </>
    )
}
//  8006570201