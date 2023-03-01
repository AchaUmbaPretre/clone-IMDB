import './home.scss'
import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Star } from '@mui/icons-material';

const Home = () => {

        const [popularMovie, setPopularMovie] = useState([]);

        useEffect(()=>{
          axios.get("")
          .then(res => res.json())
          .then(data => setPopularMovie(data.results))
        })

  return (
    <>
        <div className="home">
           <Carousel
              showThumbs = {false}
              autoPlay = {true}
              transitionTime = {3}
              infiniteLoop = {true}
              showStatus = {false}
           >
            {
              popularMovie.map(movie => (
                <Link to={`/movie/${movie.id}`}>
                    <div className="postImage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                    </div>
                    <div className="posterImage-overlay">
                        <div className="posterImage-title">{movie ? movie.original_title: ''}</div>
                        <div className="posterImage-runtime">
                          {movie ? movie.vote_average : ''}
                          <div className="posterImage-rating">
                            {movie ? movie.vote_average : ''}
                            <Star/>{' '}
                          </div>
                        </div>
                      <div className="posterImage-desc">{movie ? movie.overview : ''}</div>
                    </div>
                
                </Link>
              ))
            }
           </Carousel>
        </div>
    </>
  )
}

export default Home