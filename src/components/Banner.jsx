
import React, { useEffect, useState } from 'react'
import tmdbAxiosinstance from './tmdbAxiosInstance';
import './Banner.css';

function Banner({fetchUrl}) {
    const base_url = "https://image.tmdb.org/t/p/original/";
  const [Movie,setMovie] = useState({})

  // console.log(fetchUrl);

  const fetchData = async()=>{
    const {data} =  await tmdbAxiosinstance.get(fetchUrl)
    console.log(data.results[Math.floor(Math.random()*data.results.length)]);
    setMovie(data.results[Math.floor(Math.random()*data.results.length)])

  }

//   console.log(Movie);

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div style={{
        height:'600px',
        backgroundImage:`url(${base_url}/${Movie?.backdrop_path})`,
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
    }} >
        <div className='banner-content'>
            <h1>{Movie?.name}</h1>
            <h2>{Movie?.overview?.slice(0,250)}...</h2>

        </div>

    </div>
  );
}

export default Banner;
