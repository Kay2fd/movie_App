import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Rating from '../components/movie/Rating';

const MovieDetail = () => {
    const navigate = useNavigate();
    const [movie, setMovie] = useState({});
    const [rating, setRating] = useState(0);

    const handleRating = (rateny) => {
        setRating(rateny);
    }

    const { id } = useParams();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const apiKey = "83a90e8defb4823bd923885b57bdce53";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
                );
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    return (
        <div className="bg-neutral-900 text-white">
            <div className="flex mx-auto py-8 px-4">
                <div className="md:w-1/3">
                    <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt={movie.title} className="rounded-lg shadow-md mb-4" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <h2 className="text-3xl font-semibold mb-4">{movie.title}</h2>
                    <Rating onRate={handleRating} />
                    {rating > 0 && <p className="text-lg mb-2">Your Rating: {rating} ⭐</p>}
                    <p className="text-lg font-medium mb-4">Overview</p>
                    <p className="mb-4">{movie.overview}</p>
                    <p className="text-lg font-medium mb-2">Popularity: {movie.popularity}</p>
                    <p className="text-lg font-medium mb-2">Release Date: {movie.release_date}</p>
                    <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={() => {navigate(-1)}}>Back</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
