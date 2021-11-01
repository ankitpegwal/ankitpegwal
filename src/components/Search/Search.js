import React, { useEffect, useState } from 'react'
import {TextField,Button} from '@material-ui/core'
import axios from 'axios'
import './search.css'
import img from '../../assests/nopicture.jpg'
import CardItem from '../../CardItem'

export default function Search() {

const [searchMovie,setSearchMovie] = useState("")
const [result,setResult] = useState("")
const [moviesData,setMoviesData] = useState([])


const encoded = encodeURI(result)
console.log(encoded);
useEffect(async()=>{

try{
    if(result===""){
        console.log("Please fill any movie name");
        
    }
    else{
        const url = `https://api.themoviedb.org/3/search/movie?api_key=76414d31763a9749df4b97bce21c6c80&language=en-US&query=${encoded}&page=1&include_adult=false`
        const fecthData = await axios.get(url)
        const response = await fecthData
        console.log(response.data.results);
        setMoviesData(response.data.results)
    }
 
}catch(err){
console.log(err);
}


},[result])
const submitForm=(e)=>{
e.preventDefault()
setResult(searchMovie)
}
// console.log(result);
    return (
        <>
        <span className="pageTitle" >Search Movies</span>
        <div className="search">
        
          <form onSubmit={submitForm}>
        <TextField className="input" id="standard-basic" onChange={(e)=>setSearchMovie(e.target.value)} label="Search Movie" variant="standard" />  
        <Button  className="button" type="submit" variant="contained" color="primary">Search</Button>
        </form>
        </div>


    <div className="trending">
{
    moviesData.map((item,i)=>{
        return(
            <CardItem
                  key={i}
                  id={item.id}
                  title={item.name||item.title}
                 
                  path={item.poster_path}
                  date={item.release_date||item.first_air_date}
                  vote={item.vote_average}
                  
                  />
        )
    })
}
    </div>


        </>
    )
}
