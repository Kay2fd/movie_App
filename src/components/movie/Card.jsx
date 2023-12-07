import React from 'react';
import { useNavigate } from "react-router-dom"

const Card = ({ movie }) => {
  const navigate = useNavigate()

  const formatReleaseDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div onClick={() => navigate(`movie/${movie.id}`)} className="cursor-pointer">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full h-auto rounded-md mb-2" />
      <div className='text-white'>
        <b className="block text-xl font-semibold mb-1">{movie.title}</b>
        <p className="text-sm">{formatReleaseDate(movie.release_date)}</p>
      </div>
    </div>
  );
};

export default Card;
