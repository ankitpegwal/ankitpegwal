import { Card, Button, CardActions, Typography, CardMedia, CardContent, Grid, Paper, Badge } from '@material-ui/core'
import React from 'react'
import img from './assests/nopicture.jpg'
import { img_300, img_500 } from './config'
import './cardItem.css'
export default function CardItem({
    id, title, type, path, date, vote
})
 {
     
    const image = `${img_300}/${path}`
    return (

        <div className="media" >
            <Badge badgeContent={vote} color={vote >= 6 ? "primary" : "secondary"} />
            <img className="poster"
                src={path === null ? img : image
                } alt="" />
            <b className="title">{title} </b>
            <span className="subtitle">
                {

                    type === "tv" ? "Tv series" : "Movie"

                }
            </span>
            <span className="subtitle">
                {date}
            </span>
        </div>




        //      <Grid container spacing={2}>
        // <Grid item xs={4} >
        // <Paper >
        //     <Card sx={{ maxWidth: 343 }}>
        //     <CardMedia
        //         component="img"
        //         height="500"

        //         image={`${img_500}/${path}`}
        //         alt="green iguana"
        //       />
        //         <CardContent>
        //             <b>
        //         <Typography gutterBottom variant="h5" component="div">
        //          {title}
        //         </Typography></b>
        //         </CardContent>
        //         <CardActions>
        //         <Typography gutterBottom variant="body1" component="div">
        //          {type.toUpperCase()}
        //         </Typography>,
        //         <Typography gutterBottom variant="body" component="div">
        //          {date}
        //         </Typography>
        //       </CardActions>
        //     </Card>
        // </Paper>
        // </Grid>

        //      </Grid>
    )
}
